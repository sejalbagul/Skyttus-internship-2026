import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DashboardProvider } from './context/DashboardContext';
import ProtectedRoute from './components/ProtectedRoute';
import RoleProtectedRoute from './components/RoleProtectedRoute';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Products from './pages/Products';
import Users from './pages/Users';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <DashboardProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="app-layout">
                  <Sidebar />
                  <div style={{ flex: 1 }}>
                    <Header />
                    <div className="main-content">
                      <Routes>
                        <Route path="overview" element={<Overview />} />
                        <Route
                          path="products"
                          element={
                            <RoleProtectedRoute allowedRoles={['admin']}>
                              <Products />
                            </RoleProtectedRoute>
                          }
                        />
                        <Route
                          path="users"
                          element={
                            <RoleProtectedRoute allowedRoles={['admin']}>
                              <Users />
                            </RoleProtectedRoute>
                          }
                        />
                        <Route path="*" element={<Navigate to="overview" replace />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </DashboardProvider>
    </AuthProvider>
  );
}

export default App;