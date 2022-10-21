import { createEffect, createEvent, createStore, forward, sample } from "effector";
import { User } from "../interfaces";
import { submitForm } from "./form";

const responseUser = createEvent();
const clearUser = createEvent();
const reGetUser = createEvent();

const user: User = {
  avatar: '',
  id: '',
  login: '',
  name: ''
};

const $user = createStore(user);
$user.on(responseUser, (curState, newState) => newState);
$user.reset(clearUser);

const getUserFx = createEffect(async () => {
  const { token } = JSON.parse(localStorage.getItem('token') || '');
  console.log('fx token', token);
  
  await fetch(process.env.REACT_APP_ME, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then((resp) => {
        if(resp.status === 401) {
          localStorage.removeItem('token');
          throw new Error('401 Unauthorized');
        }
        return resp.json();
      })
      .then((user) => responseUser(user));
});

sample({
  source: $user,
  target: getUserFx,
  clock: [submitForm, reGetUser]
});

// forward({
//   from: [submitForm, reGetUser],
//   to: clearUser
// })

export {
  responseUser, 
  clearUser,
  reGetUser,
  getUserFx,
  $user
};