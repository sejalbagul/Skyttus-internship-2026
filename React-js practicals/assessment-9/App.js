import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import UncontrolledFilter from './components/UncontrolledFilter';
import styles from './App.module.css';

// Mock initial data (simulate API load)
const INITIAL_TASKS = [
  { id: 1, title: 'Learn React Hooks', description: 'Study useState, useEffect, useRef', completed: false },
  { id: 2, title: 'Build Task Manager', description: 'Create the app for the assignment', completed: false },
  { id: 3, title: 'Write Documentation', description: 'Explain how to run the project', completed: true },
];

function App() {
  // State for tasks (lifting state up)
  const [tasks, setTasks] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  // useEffect: initial data load (simulate API call)
  useEffect(() => {
    // Simulate fetching from localStorage or mock API
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks(INITIAL_TASKS);
    }
    // Optional: log mount/unmount lifecycle
    console.log('App mounted: tasks loaded');
    return () => console.log('App unmounted');
  }, []); // empty dependency -> runs only once on mount

  // useEffect: save to localStorage whenever tasks change (update lifecycle)
  useEffect(() => {
    if (tasks.length > 0 || tasks.length === 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // CRUD handlers
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      description: taskData.description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskData) => {
    setTasks(tasks.map(task =>
      task.id === editingTask.id
        ? { ...task, title: taskData.title, description: taskData.description }
        : task
    ));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEdit = (task) => {
    setEditingTask(task);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  // Filter tasks based on uncontrolled filter (from useRef component)
  const filteredTasks = filterText.trim() === ''
    ? tasks
    : tasks.filter(task =>
        task.title.toLowerCase().includes(filterText.toLowerCase()) ||
        task.description.toLowerCase().includes(filterText.toLowerCase())
      );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>📋 Task Manager</h1>
      </div>

      {/* Uncontrolled filter using useRef (demonstration) */}
      <UncontrolledFilter onFilter={setFilterText} />

      {/* Controlled form for add/edit */}
      <TaskForm
        initialTask={editingTask}
        onSubmit={editingTask ? updateTask : addTask}
        onCancel={editingTask ? cancelEdit : null}
      />

      {/* Task list component receives data and handlers via props */}
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleComplete}
        onEdit={startEdit}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
