import React from 'react';
import styles from './ServerChannels.module.css';

const ServerChannels = ({ server }) => {
  const channels = [
    { name: 'Текстовые каналы', type: 'text' },
    { name: 'Голосовые каналы', type: 'voice' }
  ];

  return (
    <div className={styles.serverChannels}>
      <h2>Каналы {server}</h2>
      <ul>
        {channels.map(channel => (
          <li key={channel.name} className={styles.channel}>
            {channel.name} ({channel.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerChannels;