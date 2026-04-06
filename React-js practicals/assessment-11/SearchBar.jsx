import React, { useRef, useEffect } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // auto-focus on mount
  }, []);

  return (
    <div className={styles.searchContainer}>
      <input
        ref={inputRef}
        type="text"
        placeholder="🔍 Search by name or category..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />
      {searchTerm && (
        <button onClick={() => onSearchChange('')} className={styles.clearBtn}>
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;