// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import styles from './App.module.css';

function App() {
    // Theme state management
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Apply theme to body
        document.body.setAttribute('data-theme', theme);
        // Save preference to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Load saved theme on initial render
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return ( <
        div className = { styles.app } >
        <
        Header toggleTheme = { toggleTheme }
        theme = { theme }
        /> <
        main >
        <
        Hero / >
        <
        About / >
        <
        Skills / >
        <
        Projects / >
        <
        ContactForm / >
        <
        /main> <
        footer className = { styles.footer } >
        <
        p > & copy; 2025 Developer Portfolio.All rights reserved. < /p> < /
        footer > <
        /div>
    );
}

export default App;
