import React from 'react';
import BlogCard from './BlogCard';
import styles from './BlogList.module.css';

const BlogList = ({ blogs, onSelectBlog }) => {
  return (
    <div className={styles.list}>
      <h2>All Blog Posts</h2>
      <div className={styles.grid}>
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} onSelect={onSelectBlog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;