import { useForm } from 'react-hook-form';

const ProductForm = ({ defaultValues, onSubmit, isEditing }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || { name: '', price: '', category: '' }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem' }}>
      <div className="form-group">
        <label>Product Name *</label>
        <input {...register('name', { required: 'Name is required' })} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      <div className="form-group">
        <label>Price *</label>
        <input type="number" step="0.01" {...register('price', { required: 'Price required', min: 0 })} />
        {errors.price && <p className="error">{errors.price.message}</p>}
      </div>
      <div className="form-group">
        <label>Category</label>
        <select {...register('category')}>
          <option value="">Select</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
      <button type="submit">{isEditing ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;