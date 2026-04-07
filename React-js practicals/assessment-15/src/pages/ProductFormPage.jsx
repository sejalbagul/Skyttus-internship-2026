import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { useState } from 'react';

const ProductFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [defaultVals] = useState(null);
  const isEditing = !!id;

  const onSubmit = (data) => {
    console.log('Product submitted:', data);
    alert(isEditing ? 'Product updated!' : 'Product added!');
    navigate('/products');
  };

  return (
    <div>
      <h1>{isEditing ? 'Edit' : 'Add'} Product</h1>
      <ProductForm defaultValues={defaultVals} onSubmit={onSubmit} isEditing={isEditing} />
    </div>
  );
};

export default ProductFormPage;