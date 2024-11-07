import React from 'react';
import styles from './ServerChannels.module.css';
import UserSetup from './UserSetup/UserSetup';

const ServerChannels = ({ server }) => {
  const channels = [
    { name: 'Информация', channels: [{ name: 'Приветствие-и-правила' }] },
    { name: 'Текстовые каналы', channels: [{ name: 'Общий-чат' }, { name: 'Проверки' }, { name: 'Файлы-premium' }, { name: 'Чат-premium' }] },
    { name: 'Голосовые каналы', channels: [{ name: 'Обсуждения' }, { name: 'Встреча с Андреем' }] },
  ];

  return (
    <div className={styles.serverChannels}>
      <h2 className={styles.serverTitle}>Каналы {server}</h2>
      {channels.map((section) => (
        <div key={section.name} className={styles.section}>
          <div className={styles.sectionHeader}>{section.name}</div>
          <ul className={styles.channelList}>
            {section.channels.map((channel) => (
              <li key={channel.name} className={styles.channelItem}>
                # {channel.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={styles.userSetupContainer}>
        <UserSetup username="User" userId="id12414234" />
      </div>
    </div>
  );
};

export default ServerChannels;
