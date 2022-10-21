import { useStore } from 'effector-react';
import { ChangeEvent, FormEvent, useEffect } from 'react';
import { ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { $form, inputLogin, inputPassword, submitForm } from '../effector/form';
import { $news } from '../effector/news';

export default function NetoForm(): ReactElement {
  const form = useStore($form);
  const news = useStore($news);
  const navigate = useNavigate();

  function handleClickIn(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    submitForm();
  };

  useEffect(() => {
    console.log(news);
    
    if (news.length) {
      navigate('/news')
    }
  }, [news.length])

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
