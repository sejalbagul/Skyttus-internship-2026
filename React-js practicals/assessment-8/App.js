import React, { useState } from 'react';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import styles from './App.module.css';

// Dummy blog data stored in state
const initialBlogs = [
  {
    id: 1,
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first component.',
    fullContent: 'React is a JavaScript library for building user interfaces. In this post, we will cover components, props, state, and hooks. You will learn how to create a functional component, manage state with useState, and pass data via props. This is a comprehensive guide for beginners.',
    image: '⚛️',
    date: '2025-03-15',
    likes: 42,
    author: 'Atul Parikh'
  },
  {
    id: 2,
    title: 'CSS Grid vs Flexbox',
    summary: 'Understanding when to use Grid and when to use Flexbox.',
    fullContent: 'Both CSS Grid and Flexbox are powerful layout tools. Grid is best for two-dimensional layouts (rows and columns), while Flexbox excels at one-dimensional alignment (either row or column). This article provides examples and use cases for each, along with code snippets.',
    image: '🎨',
    date: '2025-03-20',
    likes: 28,
    author: 'Shailesh Mahla'
  },
  {
    id: 3,
    title: 'JavaScript Async/Await Explained',
    summary: 'Master asynchronous programming with async/await.',
    fullContent: 'Async/await is syntactic sugar over Promises, making asynchronous code look synchronous. Learn how to handle API calls, errors with try/catch, and best practices for writing clean async functions. Includes practical examples with fetch.',
    image: '🔄',
    date: '2025-03-25',
    likes: 56,
    author: 'Snehal Joshi'
  }
];

function App() {
  // State: list of blogs and the selected blog id (null means show list)
  const [blogs] = useState(initialBlogs);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  // Find the selected blog object
  const selectedBlog = blogs.find(blog => blog.id === selectedBlogId);

  // Handlers
  const handleSelectBlog = (id) => {
    setSelectedBlogId(id);
  };

  const handleBackToList = () => {
    setSelectedBlogId(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={handleBackToList}>
        <h1>📝 My Blog</h1>
      </div>
      <div className={styles.content}>
        {/* Conditional rendering: show detail if selected, else show list */}
        {selectedBlog ? (
          <BlogDetail blog={selectedBlog} onBack={handleBackToList} />
        ) : (
          <BlogList blogs={blogs} onSelectBlog={handleSelectBlog} />
        )}
      </div>
    </div>
  );
}

export default App;
