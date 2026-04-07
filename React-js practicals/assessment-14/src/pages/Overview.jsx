import { useEffect } from 'react';
import { useDashboard } from '../context/DashboardContext';
import Card from '../components/Card';

const Overview = () => {
  const { overviewState, fetchOverview } = useDashboard();
  const { data, loading, error } = overviewState;

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchOverview();
    }
  }, [data, loading, error, fetchOverview]);

  if (loading) return <div className="loading">Loading overview data...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!data) return null;

  return (
    <div>
      <h2>Overview</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <Card title="Total Posts">
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{data.totalPosts}</p>
        </Card>
        <Card title="Total Users">
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{data.totalUsers}</p>
        </Card>
      </div>
      <Card title="Recent Posts">
        <ul>
          {data.recentPosts.map(post => (
            <li key={post.id} style={{ marginBottom: '0.5rem' }}>{post.title}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Overview;