/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { $user, clearUser, reGetUser } from '../effector/user';
import { clearNewsList } from '../effector/news';
import { resetNewsId, resetNewsItem } from '../effector/newsId';

export default function NetoLogout(): ReactElement {
  const user = useStore($user);

  useEffect(() => {
    if (localStorage.token && user.id === '') {
      reGetUser();
    }
  }, []);
  

  function handleClickOut() {
    clearUser();
    localStorage.clear();
    clearNewsList();
    resetNewsItem();
    resetNewsId();
  };

  return (
    <div className="auth">
      <h5>{user.name}</h5>
      <img src={user.avatar} alt={user.name} />
      <Link
        to={'/'}
        className="btn-out"
        onClick={handleClickOut}>Logout</Link>
    </div>
  )
};
