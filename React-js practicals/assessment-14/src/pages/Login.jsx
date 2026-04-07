import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState('admin');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(selectedRole);
    navigate('/dashboard/overview');
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Login</h2>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          style={selectStyle}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button onClick={handleLogin} style={buttonStyle}>Login</button>
      </div>
    </div>
  );
};

const containerStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#f1f5f9',
};

const cardStyle = {
  background: 'white',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
};

const selectStyle = {
  padding: '8px',
  margin: '15px 0',
  width: '100%',
};

const buttonStyle = {
  padding: '10px 20px',
  background: '#1e293b',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default Login;