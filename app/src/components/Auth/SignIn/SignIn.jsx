import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignIn.module.css';
import ImageQrCode from '../../../assets/signImages/example_qr_code.png';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ваша логика аутентификации
    const isAuthenticated = true; // Замените на реальную проверку входа

    if (isAuthenticated) {
      navigate('/dashboard'); // Перенаправление на dashboard
    } else {
      alert('Ошибка входа. Пожалуйста, проверьте ваши данные.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Добро пожаловать в DCOD!</h2>
      <p>Мы рады вас снова видеть!</p>
      <div className={styles.qrContainer}>
        <div className={styles.leftSide}>
          <form onSubmit={handleSubmit}>
            <label>Email или номер телефона</label>
            <input type="text" placeholder="Введите email или номер телефона" required />
            <label>Пароль</label>
            <input type="password" placeholder="Введите пароль" required />
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
