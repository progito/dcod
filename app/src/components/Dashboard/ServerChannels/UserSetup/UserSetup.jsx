import React from 'react';
import styles from './UserSetup.module.css';
import { FaMicrophone, FaHeadphones, FaCog } from 'react-icons/fa';

const UserSetup = ({ username, userId }) => {
  return (
    <div className={styles.userSetup}>
      <div className={styles.profile}>
        <div className={styles.avatar}> {/* Иконка профиля */}
          <span role="img" aria-label="User Icon">👤</span>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.username}>{username}</div>
          <div className={styles.userId}>{userId}</div>
        </div>
      </div>
      <div className={styles.icons}>
        <FaMicrophone className={styles.icon} />
        <FaHeadphones className={styles.icon} />
        <FaCog className={styles.icon} />
      </div>
    </div>
  );
};

export default UserSetup;
