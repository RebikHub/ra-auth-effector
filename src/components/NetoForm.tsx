import { useStore } from 'effector-react';
import { ChangeEvent, FormEvent, useEffect } from 'react';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { $form, inputLogin, inputPassword, submitForm } from '../effector/form';

export default function NetoForm(): ReactElement {
  const form = useStore($form);
  const navigate = useNavigate();

  function handleClickIn(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    submitForm();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/news')
    };
  });

  return (
    <form className="form" onSubmit={handleClickIn}>
      <input 
        type="text"
        className="input-name"
        placeholder="Username"
        required
        value={form.login}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => inputLogin(ev.target.value)}/>
      <input
        type="password"
        className="input-password"
        placeholder="Password"
        required
        value={form.password}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => inputPassword(ev.target.value)}/>
      <button className="form-btn" type='submit'>Login</button>
    </form>
  )
}
