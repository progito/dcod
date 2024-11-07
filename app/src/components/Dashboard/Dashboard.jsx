import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import UserList from './UserList/UserList';
import ServerChannels from './ServerChannels/ServerChannels';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState('directMessages');

  return (
    <div className={styles.dashboard}>
      <Sidebar onSelectItem={setSelectedItem} />
      <div className={styles.content}>
        {selectedItem === 'directMessages' && <UserList />}
        {selectedItem.startsWith('server') && <ServerChannels server={selectedItem} />}
      </div>
    </div>
  );
};

export default Dashboard;
