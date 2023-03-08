import { useStore } from 'effector-react';
import { ChangeEvent, FormEvent, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { $form, inputLogin, inputPassword, submitForm } from '../effector/form';
import styles from '../styles/Form.module.css';

export default function NetoForm(): ReactElement {
  const form = useStore($form);
  const navigate = useNavigate();

  function handleClickIn(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    submitForm();
  };

  function handleInputLogin(ev: ChangeEvent<HTMLInputElement>) {
    inputLogin(ev.target.value);
  };

  function handleInputPassword(ev: ChangeEvent<HTMLInputElement>) {
    inputPassword(ev.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/news')
    };
  });

  return (
    <form className={styles.form} onSubmit={handleClickIn}>
      <input 
        type="text"
        className={styles.input}
        placeholder="Username"
        required
        value={form.login}
        onChange={handleInputLogin}/>
      <input
        type="password"
        className={styles.input}
        placeholder="Password"
        required
        value={form.password}
        onChange={handleInputPassword}/>
      <button className={styles.button} type='submit'>Login</button>
    </form>
  )
}
