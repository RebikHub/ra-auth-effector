import { createEffect, createEvent, createStore, forward, sample } from "effector";
import { fetchPostAuth } from "../custom_hook/middleware";

type Input = {
  login: string,
  password: string,
}

const inputLogin = createEvent<string>();
const inputPassword = createEvent<string>();
const resetForm = createEvent();
const submitForm = createEvent();
const submitLoading = createEvent<boolean>();

const $inputLoad = createStore(false);
$inputLoad.on(submitLoading, (state, newState) => newState);

const $form = createStore({
  login: '',
  password: ''
});

$form.on(inputLogin, (state, newState) => ({
  ...state,
  login: newState
}));

$form.on(inputPassword, (state, newState) => ({
  ...state,
  password: newState
}));

$form.reset(resetForm);

const startInputFx = createEffect((input: Input) => {
  fetchPostAuth(input)
  console.log('effect start');
})

startInputFx.pending.watch((e) => {
  submitLoading(true);
  console.log('вызов с аргументом pending', e)
  console.log('завершён с pending', e)
})

startInputFx.done.watch(({result, params}) => {
  console.log('вызвов с аргументом done', params)
  console.log('завершён со значением', result)
})

startInputFx.fail.watch(({error, params}) => {
  console.log('вызов с аргументом fail', params)
  console.log('завершён с ошибкой', error)
})

sample({
  source: $form,
  target: startInputFx,
  clock: submitForm
});

forward({
  from: startInputFx,
  to: resetForm
});

export {inputLogin, inputPassword, resetForm, submitForm, $form, $inputLoad};