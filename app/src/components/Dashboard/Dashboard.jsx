import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import UserList from './UserList/UserList';
import ServerChannels from './ServerChannels/ServerChannels';
import Messages from './ServerChannels/Messages/Messages';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState('directMessages');
  const [selectedChannel, setSelectedChannel] = useState(null);

  return (
    <div className={styles.dashboard}>
      <Sidebar onSelectItem={setSelectedItem} />
      <div className={styles.content}>
        {selectedItem === 'directMessages' && <UserList />}
        
        {selectedItem.startsWith('server') && (
          <ServerChannels 
            server={selectedItem} 
            onChannelSelect={setSelectedChannel} 
          />
        )}

        
      </div>
      {selectedChannel && <Messages selectedChannel={selectedChannel} />}
    </div>
  );
};

export default Dashboard;
