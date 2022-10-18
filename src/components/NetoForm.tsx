import React, { ChangeEvent, useState } from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

type StateInput = {
  login: string,
  password: string
};

export default function NetoForm(): ReactElement {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [input, setInput] = useState<StateInput>({
    login: '', 
    password: ''
  });


  function handleClickIn() {
    if (login !== '' && password !== '') {
      setInput({
        login: login, 
        password: password
      })
      setLogin('')
      setPassword('')
    }
  }

  return (
    <form className="form">
      <input 
        type="text"
        className="input-name"
        placeholder="Username"
        required
        value={login}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => setLogin(ev.target.value)}/>
      <input
        type="password"
        className="input-password"
        placeholder="Password"
        required
        value={password}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}/>
      <Link
        to={'/news'}
        className="form-btn"
        onClick={handleClickIn}>Login</Link>
    </form>
  )
}
