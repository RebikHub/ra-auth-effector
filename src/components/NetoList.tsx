import { useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { $news } from '../effector/news';
import NetoNews from './NetoNews';

export default function NetoList(): ReactElement {
  const news = useStore($news);
  console.log(news);

  return (
    <div className="news-list">
      {news.map((el, i) =>
        <NetoNews
          news={el}
          key={i}/>
        )}
    </div>
  )
}
