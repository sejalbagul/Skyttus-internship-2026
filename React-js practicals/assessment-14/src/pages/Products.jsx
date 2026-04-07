import { useEffect } from 'react';
import { useDashboard } from '../context/DashboardContext';
import Card from '../components/Card';

const Products = () => {
  const { productsState, fetchProducts } = useDashboard();
  const { data, loading, error } = productsState;

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchProducts();
    }
  }, [data, loading, error, fetchProducts]);

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!data) return null;

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {data.map(product => (
          <Card key={product.id}>
            <img src={product.thumbnailUrl} alt={product.title} style={{ width: '100%', borderRadius: '0.25rem' }} />
            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>{product.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;