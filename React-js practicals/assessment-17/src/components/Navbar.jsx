import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { token, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav style={{ background: '#1f2937', color: 'white', padding: '1rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          {token && (
            <>
              <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
              <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
            </>
          )}
        </div>
        <div>
          {token ? (
            <button onClick={handleLogout} style={{ background: '#ef4444', border: 'none', padding: '0.25rem 0.75rem', borderRadius: '4px', color: 'white' }}>Logout</button>
          ) : (
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar