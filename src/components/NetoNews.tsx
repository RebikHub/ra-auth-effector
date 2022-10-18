import React, { ReactElement, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NewsItem } from '../interfaces';
import NetoError from './NetoError';

type Props = {
  news: NewsItem
}

export default function NetoNews({news}: Props): ReactElement {
  const [newsId, setNewsId] = useState<string>('')
  const params = useParams()
  if (!news) {
    return (
      <NetoError error={'404 Not Found'}/>
    )
  }

  return (
    <Link to={`/news/${news.id}`} onClick={(ev) => {
        if (params.newsId) {
          ev.preventDefault()
        } else {
          setNewsId(news.id)
        }
      }} className="news">
      <img src={news.image} alt={news.title} />
      <div className="news-text">
        <h5>{news.title}</h5>
        <p>{news.content}</p>
      </div>
    </Link>
  )
}
