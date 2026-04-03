import React from 'react';
import styles from './BlogDetail.module.css';

const BlogDetail = ({ blog, onBack }) => {
  if (!blog) return null;

  return (
    <div className={styles.detail}>
      <button onClick={onBack} className={styles.backBtn}>← Back to all posts</button>
      <div className={styles.image}>{blog.image}</div>
      <h2>{blog.title}</h2>
      <div className={styles.meta}>
        <span>📅 {blog.date}</span>
        <span>👍 {blog.likes} likes</span>
        <span>✏️ {blog.author}</span>
      </div>
      <div className={styles.content}>
        <p>{blog.fullContent}</p>
      </div>
    </div>
  );
};

export default BlogDetail;