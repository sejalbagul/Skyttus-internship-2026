import { useAuth } from '../context/AuthContext'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div>
      <h1>Your Profile</h1>
      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px' }}>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>User ID:</strong> {user?.id || 'Not provided'}</p>
        <p><strong>Token expiry check:</strong> Implemented via interceptor.</p>
      </div>
    </div>
  )
}

export default Profile