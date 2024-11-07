import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <h2>Создайте аккаунт</h2>
      <form>
        <label>Имя пользователя</label>
        <input type="text" placeholder="Введите имя пользователя" />
        <label>Email</label>
        <input type="email" placeholder="Введите email" />
        <label>Пароль</label>
        <input type="password" placeholder="Введите пароль" />
        <label>Повторите пароль</label>
        <input type="password" placeholder="Повторите пароль" />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <p>Уже есть аккаунт? <Link to="/signin">Войти</Link></p>
    </div>
  );
};

export default SignUp;
