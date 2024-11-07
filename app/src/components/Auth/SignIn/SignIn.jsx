import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignIn.module.css';

const SignIn = () => {
  return (
    <div className={styles.container}>
      <h2>Добро пожаловать!</h2>
      <p>Мы рады вас снова видеть!</p>
      <form>
        <label>Email или номер телефона</label>
        <input type="text" placeholder="Введите email или номер телефона" />
        <label>Пароль</label>
        <input type="password" placeholder="Введите пароль" />
        <p><Link to="/reset-password">Забыли пароль?</Link></p>
        <button type="submit">Войти</button>
      </form>
      <div className={styles.qrLogin}>
        <p>Или войдите с помощью QR-кода</p>
        <img src="qr-code-placeholder.png" alt="QR Code" />
      </div>
      <p>Нет аккаунта? <Link to="/signup">Регистрация</Link></p>
    </div>
  );
};

export default SignIn;
