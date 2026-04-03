import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className={styles.card}>
      <div className={styles.image}>{image}</div>
      <div className={styles.details}>
        <h3>{name}</h3>
        <p className={styles.price}>₹{price.toFixed(2)}</p>
        <button className={styles.addBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;