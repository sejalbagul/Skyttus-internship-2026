import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome back, {user?.name || user?.email || 'User'}!</p>
      <p>This is a protected page. Your JWT token is valid.</p>
      <div style={{ marginTop: '2rem', background: '#e0f2fe', padding: '1rem', borderRadius: '8px' }}>
        <h3>Protected content</h3>
        <p>Only authenticated users can see this.</p>
      </div>
    </div>
  )
}

export default Dashboard