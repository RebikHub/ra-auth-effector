/* eslint-disable react-hooks/exhaustive-deps */
import { useStore } from 'effector-react';
import React, { memo, ReactElement, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { $newsId, newsId, newsItem } from '../effector/newsId';
import { NewsItem } from '../interfaces';
import NetoError from './NetoError';
import styles from '../styles/News.module.css';

type Props = {
  news: NewsItem | null
};

function NetoNews({news}: Props): ReactElement {
  const params = useParams();
  const id = useStore($newsId);

  useEffect(() => {
    if (news) {
      newsItem(news);
    } else if(!news && params.newsId && id === '') {
      newsId(params.newsId)
    }
  }, []);
  
  if (!news) {
    return (
      <NetoError error={'404 Not Found'}/>
    )
  }

  return (
    <Link to={`/news/${news.id}`} className={styles.news}>
      <img src={news.image} alt={news.title} />
      <div className={styles.text}>
        <h5>{news.title}</h5>
        <p>{news.content}</p>
      </div>
    </Link>
  )
}

export default memo(NetoNews);