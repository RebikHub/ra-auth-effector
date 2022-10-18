import React, { useState } from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../interfaces';

type Props = {
  user: User
};

export default function NetoLogout({user}: Props): ReactElement {
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
