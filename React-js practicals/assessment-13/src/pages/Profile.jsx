import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Profile</h1>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Token:</strong> {user?.token?.slice(0, 20)}...</p>
    </div>
  );
};

export default Profile;