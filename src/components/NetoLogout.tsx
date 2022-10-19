import { useStore } from 'effector-react';
import React, { useState } from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { $user } from '../effector/user';
import { User } from '../interfaces';

export default function NetoLogout(): ReactElement {
  const user = useStore($user);
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<boolean>(false);

  function handleClickOut() {
    setOutput(true)
    setInput('')
    setTimeout(() => setOutput(false), 2*1000)
  }

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
}
