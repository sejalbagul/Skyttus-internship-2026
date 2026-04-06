import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ products, loading, error }) => {
  if (loading) {
    return (
      <div className={styles.message}>
        <div className={styles.spinner}></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.message}>
        <p className={styles.error}>❌ {error}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className={styles.message}>
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;