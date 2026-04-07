import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = () => {
  const { token, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div> // or a spinner
  }

  return token ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute