import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{
      width: '260px',
      background: '#1f2937',
      color: 'white',
      position: 'fixed',
      height: '100vh',
      padding: '1.5rem 0',
      top: 0,
      left: 0
    }}>
      <h2 style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>Role Dashboard</h2>
      <nav>
        <NavLink to="/" style={({isActive}) => ({
          display: 'block',
          padding: '0.75rem 1.5rem',
          color: isActive ? '#3b82f6' : '#d1d5db',
          textDecoration: 'none',
          background: isActive ? '#374151' : 'transparent'
        })} end>Dashboard</NavLink>
        <NavLink to="/products" style={({isActive}) => ({
          display: 'block',
          padding: '0.75rem 1.5rem',
          color: isActive ? '#3b82f6' : '#d1d5db',
          textDecoration: 'none',
          background: isActive ? '#374151' : 'transparent'
        })}>Products</NavLink>
        <NavLink to="/products/add" style={({isActive}) => ({
          display: 'block',
          padding: '0.75rem 1.5rem',
          color: isActive ? '#3b82f6' : '#d1d5db',
          textDecoration: 'none',
          background: isActive ? '#374151' : 'transparent'
        })}>Add Product</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;