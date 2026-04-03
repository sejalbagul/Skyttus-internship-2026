import React from 'react';
import styles from './BlogCard.module.css';

const BlogCard = ({ blog, onSelect }) => {
  return (
    <div className={styles.card} onClick={() => onSelect(blog.id)}>
      <div className={styles.image}>{blog.image}</div>
      <div className={styles.content}>
        <h3>{blog.title}</h3>
        <p>{blog.summary}</p>
        <div className={styles.meta}>
          <span>📅 {blog.date}</span>
          <span>👍 {blog.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;