import { createEffect, createEvent, createStore, forward, restore, sample } from "effector";

type Input = {
  login: string,
  password: string,
}

const inputLogin = createEvent<string>();
const inputPassword = createEvent<string>();
const resetForm = createEvent();
const submitForm = createEvent();

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

const startInputFx = createEffect(async (input: Input) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(
      fetch(process.env.REACT_APP_AUTH, {
        method: 'POST',
        body: JSON.stringify(input)
      })
        .then((resp) => {
          if (resp.status === 400) {
            localStorage.removeItem('token');
            throw new Error('user not found');
          }
          return resp.json();
        })
        .then((token) => {
          localStorage.setItem('token', JSON.stringify(token))
        }))
    }, 3 * 1000)
  })
})

const $formError = restore<Error>(startInputFx.failData, null);
$formError.reset(startInputFx.done)

sample({
  source: $form,
  target: startInputFx,
  clock: submitForm
});

forward({
  from: startInputFx,
  to: resetForm
});

export {inputLogin, inputPassword, resetForm, submitForm, startInputFx, $form, $formError};