import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const priceInRupees = (product.price * 85).toFixed(2);

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <h3>{product.title.length > 40 ? product.title.slice(0,40)+'...' : product.title}</h3>
        <p className={styles.price}>₹{priceInRupees}</p>
      </Link>
      <button onClick={() => addToCart(product)} className={styles.addBtn}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;