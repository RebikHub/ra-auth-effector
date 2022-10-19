import { createEvent, createStore } from "effector";
import { User } from "../interfaces";

const responseUser = createEvent();
const clearUser = createEvent();

const user: User = {
  avatar: '',
  id: '',
  login: '',
  name: ''
}

const $user = createStore(user);

$user.on(responseUser, (curState, newState) => newState);
$user.reset(clearUser);

export {responseUser, clearUser, $user};