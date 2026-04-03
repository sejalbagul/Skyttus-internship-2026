import React from 'react';
import UserList from './components/UserList';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>👥 User Manager</h1>
      <UserList />
    </div>
  );
}

export default App;
