import React from 'react';
import { FaPaperclip } from 'react-icons/fa'; // Import an icon from a library like Font Awesome
import styles from './Messages.module.css';

const Messages = ({ selectedChannel, messages = [], currentUser }) => {
  if (!selectedChannel) {
    return <div className={styles.noChannel}>Выберите канал для отображения сообщений</div>;
  }

  return (
    <div className={styles.messagesContainer}>
      {/* Заголовок канала */}
      <h2 className={styles.channelTitle}>{selectedChannel.name}</h2>
      <p className={styles.channelDescription}>
        Описание канала: {selectedChannel.description || "Описание отсутствует"}
      </p>

      {/* Список сообщений */}
      <div className={styles.messageList}>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.messageItem} ${
                msg.username === currentUser ? styles.sent : styles.received
              }`}
            >
              <div className={styles.messageHeader}>
                <span className={styles.username}>{msg.username}</span>
                <span className={styles.timestamp}>{msg.timestamp}</span>
              </div>
              <div className={styles.messageText}>{msg.text}</div>
            </div>
          ))
        ) : (
          <div className={styles.noMessages}>Сообщений пока нет</div>
        )}
      </div>

      {/* Поле ввода сообщения с иконкой скрепки */}
      <div className={styles.messageInputContainer}>
        <button className={styles.attachmentButton}>
          <FaPaperclip size={20} />
        </button>
        <input
          type="text"
          placeholder="Введите сообщение..."
          className={styles.messageInput}
        />
        <button className={styles.sendButton}>Отправить</button>
      </div>
    </div>
  );
};

export default Messages;
