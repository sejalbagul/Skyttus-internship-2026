import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(() => {
    // Mock products – no localStorage
    setProducts([
      { id: 1, name: 'Laptop', price: 999 },
      { id: 2, name: 'Mouse', price: 25 },
      { id: 3, name: 'Keyboard', price: 75 }
    ]);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Products</h1>
        <Link to="/products/add"><button>+ Add Product</button></Link>
      </div>
      <DataTable data={products} />
    </div>
  );
};

export default Products;