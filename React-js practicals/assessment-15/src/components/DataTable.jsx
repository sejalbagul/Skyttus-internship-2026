import React from 'react';

const DataTable = React.memo(({ data }) => {
  console.log('DataTable rendered');
  if (!data.length) return <p>No data</p>;
  return (
    <table style={{ width: '100%', background: 'white', borderRadius: '1rem', borderCollapse: 'collapse', overflow: 'hidden' }}>
      <thead>
        <tr><th>ID</th><th>Name</th><th>Price</th></tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
            <td style={{ padding: '0.75rem' }}>{item.id}</td>
            <td style={{ padding: '0.75rem' }}>{item.name}</td>
            <td style={{ padding: '0.75rem' }}>₹{item.price}</td>   {/* ← changed $ to ₹ */}
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default DataTable;