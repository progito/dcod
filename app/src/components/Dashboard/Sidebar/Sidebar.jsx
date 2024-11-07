import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ onSelectItem }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    onSelectItem(item);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.icon} onClick={() => handleSelectItem('directMessages')}>
        📨
      </div>
      <hr className={styles.separator} />
      <div className={styles.servers}>
        {[1, 2, 3].map(server => (
          <div
            key={server}
            className={`${styles.serverIcon} ${selectedItem === `server${server}` ? styles.selected : ''}`}
            onClick={() => handleSelectItem(`server${server}`)}
          >
            {`Server ${server}`}
          </div>
        ))}
        <div
          className={styles.addServer}
          onClick={() => handleSelectItem('addServer')}
        >
          ➕
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
