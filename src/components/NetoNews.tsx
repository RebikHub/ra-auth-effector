import { useStore } from 'effector-react';
import React, { ReactElement, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { $newsId, getNewsId, getNewsIdFx, newsId, newsItem } from '../effector/newsId';
import { NewsItem } from '../interfaces';
import NetoError from './NetoError';

type Props = {
  news: NewsItem | null
};

export default function NetoNews({news}: Props): ReactElement {
  const params = useParams();
  const id = useStore($newsId);
  console.log(news);

  useEffect(() => {
    if (news) {
      newsItem(news);
    } else if(!news && params.newsId && id === '') {
      console.log(id);
      
      console.log(!news, params.newsId);
      
      // newsId(params.newsId)
    }
  }, []);
  
  if (!news || getNewsIdFx.done.) {   // сделать обработчики ошибок на getUser and GetId
    return (
      <NetoError error={'404 Not Found'}/>
    )
  }

  return (
    <Link to={`/news/${news.id}`} className="news">
      <img src={news.image} alt={news.title} />
      <div className="news-text">
        <h5>{news.title}</h5>
        <p>{news.content}</p>
      </div>
    </Link>
  )
}
