import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignIn.module.css';
import ImageQrCode from '../../../assets/signImages/example_qr_code.png';

const SignIn = () => {
  return (
    <div className={styles.container}>
      <h2>Добро пожаловать в DCOD!</h2>
      <p>Мы рады вас снова видеть!</p>
      <div className={styles.qrContainer}>
        <div className={styles.leftSide}>
          <form>
            <label>Email или номер телефона</label>
            <input type="text" placeholder="Введите email или номер телефона" />
            <label>Пароль</label>
            <input type="password" placeholder="Введите пароль" />
            <p><Link to="/reset-password">Забыли пароль?</Link></p>
            <button type="submit">Войти</button>
          </form>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.qrLogin}>
            <p>Или войдите с помощью QR-кода</p>
            <img src={ImageQrCode} alt="QR Code" />
          </div>
          <p>Нет аккаунта? <Link to="/signup">Регистрация</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
