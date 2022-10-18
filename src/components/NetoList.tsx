import React, { ReactElement, useState } from 'react';
import { NewsList } from '../interfaces';
import NetoNews from './NetoNews';

type Props = {
  news: NewsList
}

export default function NetoList({news}: Props): ReactElement {
  const [newsId, setNewsId] = useState<string | null>(null)

  return (
    <div className="news-list">
      {news.map((el) =>
        <NetoNews
          news={el}
          key={el.id}/>
        )}
    </div>
  )
}
