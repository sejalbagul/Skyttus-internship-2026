import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 49.99, image: '🎧', category: 'Electronics' },
  { id: 2, name: 'Smart Watch', price: 89.99, image: '⌚', category: 'Wearables' },
  { id: 3, name: 'Running Shoes', price: 69.99, image: '👟', category: 'Footwear' },
  { id: 4, name: 'Backpack', price: 39.99, image: '🎒', category: 'Accessories' },
  { id: 5, name: 'Bluetooth Speaker', price: 59.99, image: '🔊', category: 'Electronics' },
  { id: 6, name: 'Sunglasses', price: 24.99, image: '🕶️', category: 'Accessories' },
  { id: 7, name: 'Gaming Mouse', price: 29.99, image: '🖱️', category: 'Electronics' },
  { id: 8, name: 'Yoga Mat', price: 19.99, image: '🧘', category: 'Fitness' }
];

const ProductList = ({ searchTerm }) => {
  const filteredProducts = searchTerm
    ? products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : products;

  return (
    <div id="products" className={styles.productSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.productGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className={styles.noResults}>No products match your search.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;