import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { $user, clearUser, reGetUser } from '../effector/user';
import { clearNewsList } from '../effector/news';

export default function NetoLogout(): ReactElement {
  const user = useStore($user);

  useEffect(() => {
    if (localStorage.token && user.id === '') {
      console.log(user);
      reGetUser();
    }
  }, []);
  

  function handleClickOut() {
    clearUser();
    localStorage.clear();
    clearNewsList();
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
