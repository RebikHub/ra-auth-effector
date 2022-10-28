import { createEffect, createEvent, createStore, sample } from "effector";
import { NewsItem } from "../interfaces";

const newsId = createEvent<string>();
const getNewsId = createEvent();
const newsItem = createEvent<NewsItem>();
const resetNewsItem = createEvent();
const resetNewsId = createEvent();

const $newsItem = createStore<NewsItem | null>(null);
$newsItem.on(newsItem, (state, newState) => newState);
$newsItem.reset(resetNewsItem);

const $newsId = createStore<string>('');
$newsId.on(newsId, (state, newState) => newState);
$newsId.reset(resetNewsId);

const getNewsIdFx = createEffect(async () => {
  const { token } = JSON.parse(localStorage.getItem('token') || '');
  const id = $newsId.getState();
  
  await fetch(`${process.env.REACT_APP_NEWS}/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
    .then((resp) => {
      if(resp.status === 404) {
        throw new Error('404 Not Found')
      }
      return resp.json()
    })
    .then((item) => newsItem(item))
});

sample({
  clock: newsId,
  target: getNewsIdFx,
  source: $newsItem
});

export {
  newsId,
  getNewsId,
  newsItem,
  resetNewsItem,
  resetNewsId,
  $newsItem,
  $newsId,
  getNewsIdFx
}