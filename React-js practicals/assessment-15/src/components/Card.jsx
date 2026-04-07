import React from 'react';

const Card = React.memo(({ title, value, icon }) => {
  console.log(`Card ${title} rendered`);
  return (
    <div style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <div style={{ fontSize: '2rem' }}>{icon}</div>
      <h3>{title}</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
    </div>
  );
});

export default Card;