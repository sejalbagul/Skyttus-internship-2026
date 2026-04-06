import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { title, price, image, category } = product;

  // Convert USD to INR (1 USD = 85 INR)
  const priceInRupees = (price * 85).toFixed(2);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>
          {title.length > 40 ? title.slice(0, 40) + '...' : title}
        </h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>₹{priceInRupees}</p>
        <button className={styles.button}>View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;