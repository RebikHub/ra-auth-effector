import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { $user, clearUser, reGetUser } from '../effector/user';
import { clearNewsList } from '../effector/news';
import { resetNewsId, resetNewsItem } from '../effector/newsId';
import styles from '../styles/Logout.module.css';

export default function NetoLogout(): ReactElement {
  const user = useStore($user);

  useEffect(() => {
    if (localStorage.token && user.id === '') {
      reGetUser();
    }
  }, [user.id]);
  

  function handleClickOut() {
    clearUser();
    localStorage.clear();
    clearNewsList();
    resetNewsItem();
    resetNewsId();
  };

  return (
    <div className={styles.auth}>
      <h5>{user.name}</h5>
      <img src={user.avatar} alt={user.name} />
      <Link
        to={'/'}
        className={styles.button}
        onClick={handleClickOut}>Logout</Link>
    </div>
  )
};
