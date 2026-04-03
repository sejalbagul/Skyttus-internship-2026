import React from 'react';
import Button from './Button';
import styles from './TaskItem.module.css';

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <div className={`${styles.item} ${task.completed ? styles.completed : ''}`}>
      <div className={styles.content}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className={styles.actions}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className={styles.checkbox}
        />
        <Button onClick={() => onEdit(task)} variant="primary">Edit</Button>
        <Button onClick={() => onDelete(task.id)} variant="danger">Delete</Button>
      </div>
    </div>
  );
};

export default TaskItem;