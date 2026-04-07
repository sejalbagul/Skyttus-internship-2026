import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { role } = useAuth();

  return (
    <aside className="sidebar">
      <div className="logo">MyDashboard</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard/overview" className={({ isActive }) => isActive ? 'active' : ''}>
              Overview
            </NavLink>
          </li>
          {role === 'admin' && (
            <>
              <li>
                <NavLink to="/dashboard/products" className={({ isActive }) => isActive ? 'active' : ''}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users" className={({ isActive }) => isActive ? 'active' : ''}>
                  Users
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;