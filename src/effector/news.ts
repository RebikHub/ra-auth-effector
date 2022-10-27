import { createEffect, createEvent, createStore, sample } from "effector";
import { NewsItem } from "../interfaces";
import { submitForm } from "./form";
import { reGetUser } from "./user";

export const $news = createStore<NewsItem[]>([]);

export const addNewsList = createEvent<NewsItem[]>();
export const clearNewsList = createEvent();

$news.on(addNewsList, (state, newState) => newState);
$news.reset(clearNewsList);

export const getNewsListFx = createEffect(async () => {
  const { token } = JSON.parse(localStorage.getItem('token') || '');
    await fetch(process.env.REACT_APP_NEWS, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then((resp) => {
        if(resp.status === 401) {
          localStorage.removeItem('token');
          throw new Error('401 Unauthorized not news');
        };
        return resp.json();
      })
      .then((json) => addNewsList(json));
});

sample({
  source: $news,
  target: getNewsListFx,
  clock: [submitForm, reGetUser]
})
