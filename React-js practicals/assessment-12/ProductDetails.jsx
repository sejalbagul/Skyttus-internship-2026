import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { useCart } from '../context/CartContext';
import Loader from '../components/Loader';
import ErrorComponent from '../components/ErrorComponent';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductById(id)
      .then(res => setProduct(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorComponent message={error} />;

  const priceInRupees = (product.price * 85).toFixed(2);

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backBtn}>← Back</button>
      <div className={styles.details}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>₹{priceInRupees}</p>
          <p className={styles.description}>{product.description}</p>
          <button onClick={() => addToCart(product)} className={styles.addBtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;