import React from 'react';
import styles from './SearchBar.module.css';

// Receives searchTerm and setSearchTerm as props (demonstrates prop usage)
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className="container">
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleChange}
            className={styles.searchInput}
          />
          <button className={styles.searchBtn}>🔍 Search</button>
        </div>
        {/* Optional: show message – UI only */}
        {searchTerm && (
          <p className={styles.searchHint}>Showing results for: "{searchTerm}" (demo UI)</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;