import React, { useState, useEffect } from 'react';
import { fetchProducts } from './services/api';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import styles from './App.module.css';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    fetchProducts()
      .then(data => {
        setAllProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter whenever searchTerm or allProducts changes
  useEffect(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, allProducts]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🛍️ Product Search</h1>
        <p>Real‑time filter (controlled component + useEffect)</p>
      </div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProductList products={filteredProducts} loading={loading} error={error} />
    </div>
  );
}

export default App;
