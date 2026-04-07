import Card from '../components/Card';
import DataTable from '../components/DataTable';

const Dashboard = () => {
  const stats = [
    { title: 'Total Products', value: 42, icon: '📦' },
    { title: 'Revenue', value: '₹12,345', icon: '💰' },
    { title: 'Users', value: 128, icon: '👥' },
  ];
  const recentProducts = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 25 },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {stats.map(s => <Card key={s.title} title={s.title} value={s.value} icon={s.icon} />)}
      </div>
      <h3>Recent Products</h3>
      <DataTable data={recentProducts} />
    </div>
  );
};

export default Dashboard;