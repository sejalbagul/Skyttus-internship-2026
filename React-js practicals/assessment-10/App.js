import React, { useState, useEffect } from 'react';
import { fetchProducts } from './services/api';
import ProductList from './components/ProductList';
import styles from './App.module.css';

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async() => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message || 'Failed to fetch products.');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return ( <
        div className = { styles.container } >
        <
        div className = { styles.header } >
        <
        h1 > 🛍️Product Catalog < /h1> <
        /div> <
        ProductList products = { products }
        loading = { loading }
        error = { error }
        /> <
        /div>
    );
}

export default App;