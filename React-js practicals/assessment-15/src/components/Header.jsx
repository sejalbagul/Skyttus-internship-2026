const Header = () => {
  return (
    <header style={{
      background: 'white',
      padding: '1rem 2rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <h2>Role‑based Dashboard</h2>
      <div>Admin User</div>
    </header>
  );
};

export default Header;