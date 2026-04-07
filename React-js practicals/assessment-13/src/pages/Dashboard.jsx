import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.email}!</p>
      <p>This is a protected route. You can only see this after logging in.</p>
    </div>
  );
};

export default Dashboard;