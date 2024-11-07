import React from 'react';
import styles from './UserList.module.css';

const UserList = () => {
  const users = ['User1', 'User2', 'User3', 'User4'];

  return (
    <div className={styles.userList}>
      <h2>Личные сообщения</h2>
      <ul>
        {users.map(user => (
          <li key={user} className={styles.user}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;