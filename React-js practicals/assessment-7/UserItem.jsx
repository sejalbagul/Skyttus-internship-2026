import React from 'react';
import styles from './UserItem.module.css';

const UserItem = ({ user, onToggle }) => {
  // Determine class based on active status (highlight active users)
  const userClass = user.isActive ? `${styles.userCard} ${styles.active}` : styles.userCard;

  return (
    <div className={userClass}>
      <div className={styles.avatar}>
        {user.name.charAt(0).toUpperCase()}
      </div>
      <div className={styles.info}>
        <h3>{user.name}</h3>
        <p className={styles.email}>{user.email}</p>
        <p className={styles.status}>
          Status: {user.isActive ? '🟢 Active' : '🔴 Inactive'}
        </p>
      </div>
      <button 
        onClick={() => onToggle(user.id)} 
        className={styles.toggleBtn}
      >
        {user.isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
};

export default UserItem;