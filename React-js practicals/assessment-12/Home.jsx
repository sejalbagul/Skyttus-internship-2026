import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import ErrorComponent from '../components/ErrorComponent';
import styles from './Home.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorComponent message={error} />;

  return (
    <div className={styles.container}>
      <h1>🛍️ Our Products</h1>
      <div className={styles.grid}>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default Home;