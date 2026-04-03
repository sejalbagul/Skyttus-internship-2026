import React, { useRef } from 'react';
import Button from './Button';

const UncontrolledFilter = ({ onFilter }) => {
  const filterInputRef = useRef(null);

  const handleFilter = () => {
    const value = filterInputRef.current.value;
    onFilter(value);
  };

  const clearFilter = () => {
    filterInputRef.current.value = '';
    onFilter('');
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        type="text"
        ref={filterInputRef}
        placeholder="Uncontrolled filter (useRef)"
        style={{ flex: 1, padding: '8px', borderRadius: '8px', border: '1px solid #ddd' }}
      />
      <Button onClick={handleFilter} variant="primary">Filter</Button>
      <Button onClick={clearFilter} variant="danger">Clear</Button>
    </div>
  );
};

export default UncontrolledFilter;