import { useEffect } from 'react';
import { useDashboard } from '../context/DashboardContext';
import Card from '../components/Card';

const Users = () => {
  const { usersState, fetchUsers } = useDashboard();
  const { data, loading, error } = usersState;

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchUsers();
    }
  }, [data, loading, error, fetchUsers]);

  if (loading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!data) return null;

  return (
    <div>
      <h2>Users</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {data.map(user => (
          <Card key={user.id} title={user.name}>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Users;