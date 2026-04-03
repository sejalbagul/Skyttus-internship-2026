import React, { useState } from 'react';
import UserItem from './UserItem';
import styles from './UserList.module.css';

// Initial user data (stored in state)
const initialUsers = [
  { id: 1, name: 'Sejal Bagul', email: 'seju@example.com', isActive: true },
  { id: 2, name: 'Sweety Agarwal', email: 'sweety@example.com', isActive: false },
  { id: 3, name: 'Sadhna Mahla', email: 'ssm@example.com', isActive: true },
  { id: 4, name: 'Shrushti Mehta', email: 'shrushti@example.com', isActive: false },
];

const UserList = () => {
  // State to store users array
  const [users, setUsers] = useState(initialUsers);

  // Toggle active status function
  const toggleUserStatus = (userId) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  return (
    <div className={styles.container}>
      <h2>User Directory</h2>
      {/* Conditional rendering: show message if no users */}
      {users.length === 0 ? (
        <p className={styles.emptyMessage}>🚫 No users available. Add some users.</p>
      ) : (
        <div>
          {users.map(user => (
            <UserItem 
              key={user.id} 
              user={user} 
              onToggle={toggleUserStatus} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;