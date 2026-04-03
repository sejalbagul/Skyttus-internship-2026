import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';

const TaskForm = ({ initialTask, onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // When editing, populate form
  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, description });
    if (!initialTask) {
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f9f9f9', borderRadius: '12px' }}>
      <Input
        label="Task Title *"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        required
      />
      <Input
        label="Description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Optional description"
      />
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        {onCancel && <Button type="button" variant="danger" onClick={onCancel}>Cancel</Button>}
        <Button type="submit" variant="success">{initialTask ? 'Update' : 'Add Task'}</Button>
      </div>
    </form>
  );
};

export default TaskForm;