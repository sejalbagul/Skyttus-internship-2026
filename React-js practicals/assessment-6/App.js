import React, { useState } from 'react';
import styles from './App.module.css';

// Set a maximum limit for the counter (e.g., 10)
const MAX_LIMIT = 10;

function App() {
  // State to hold the current counter value
  const [count, setCount] = useState(0);

  // Increment handler
  const increment = () => {
    if (count < MAX_LIMIT) {
      setCount(count + 1);
    }
  };

  // Decrement handler (only if count > 0)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset handler
  const reset = () => {
    setCount(0);
  };

  // Determine if decrement button should be disabled
  const isDecrementDisabled = count === 0;

  // Determine if warning should be shown (count equals or exceeds limit? We'll show when count === MAX_LIMIT)
  const showWarning = count === MAX_LIMIT;

  return (
    <div className={styles.container}>
      <h1>Counter App</h1>
      <div className={styles.counter}>{count}</div>
      <div className={styles.buttons}>
        <button onClick={increment} className={styles.increment}>+ Increase</button>
        <button 
          onClick={decrement} 
          className={styles.decrement}
          disabled={isDecrementDisabled}
        >
          - Decrease
        </button>
        <button onClick={reset} className={styles.reset}>⟳ Reset</button>
      </div>
      {/* Conditional rendering: show warning only when limit is reached */}
      {showWarning && (
        <div className={styles.warning}>
          ⚠️ Warning: Maximum limit of {MAX_LIMIT} reached! You cannot increase further.
        </div>
      )}
    </div>
  );
}

export default App;
