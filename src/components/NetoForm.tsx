import { useStore } from 'effector-react';
import React, { ChangeEvent, MouseEvent, ReactHTML, useState } from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { $form, inputLogin, inputPassword, submitForm } from '../effector/form';

type StateInput = {
  login: string,
  password: string
};

export default function NetoForm(): ReactElement {
  const formStore = useStore($form);

  function handleClickIn(ev: MouseEvent<HTMLElement>) {
    // if (formStore.login !== '' && formStore.password !== '') {
    //   setInput({
    //     login: login, 
    //     password: password
    //   })
    //   setLogin('')
    //   setPassword('')
    // }
    ev.preventDefault()
    submitForm()
  }
  // setLogin(ev.target.value)
  return (
    <form className="form">
      <input 
        type="text"
        className="input-name"
        placeholder="Username"
        required
        value={formStore.login}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => inputLogin(ev.target.value)}/>
      <input
        type="password"
        className="input-password"
        placeholder="Password"
        required
        value={formStore.password}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => inputPassword(ev.target.value)}/>
      <Link
        to={'/news'}
        className="form-btn"
        onClick={handleClickIn}
        >Login</Link>
    </form>
  )
}
