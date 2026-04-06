import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ products, loading, error }) => {
  if (loading) return <div className={styles.message}><div className={styles.spinner}></div><p>Loading...</p></div>;
  if (error) return <div className={styles.message}><p className={styles.error}>❌ {error}</p></div>;
  if (!products.length) return <div className={styles.message}>No products match your search.</div>;

  return (
    <div className={styles.grid}>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
};

export default ProductList;