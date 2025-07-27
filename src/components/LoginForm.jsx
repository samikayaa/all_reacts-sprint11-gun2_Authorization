import axios from 'axios';
import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

function LoginForm() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };


  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>USERNAME</h2>
            <input
              type="text"
              onChange={handleChange}
              value={form.username}
              placeholder="username"
              {...register('username', { required: 'Kullanıcı adı zorunludur.' })}
            />
            {error?.username && <p>{error.username.message}</p>}
          </div>
          <div>
            <input
              type="password"
              onChange={handleChange}
              value={form.password}
              placeholder="password"
              {...register('password', { required: 'Şifre girmeden nasıl olacak?' })}
            />
            {error?.password && <p>{error.password.message}</p>}
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );

}

export default LoginForm;
