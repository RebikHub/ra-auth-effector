import { useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { $news } from '../effector/news';
import NetoNews from './NetoNews';
import styles from '../styles/List.module.css';

export default function NetoList(): ReactElement {
  const news = useStore($news);

  return (
    <div className={styles.list}>
      {news.map((el, i) =>
        <NetoNews
          news={el}
          key={i}/>
        )}
    </div>
  )
}
