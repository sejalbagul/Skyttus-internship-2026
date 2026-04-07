import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function App() {
    return ( <
        AuthProvider >
        <
        BrowserRouter >
        <
        Navbar / >
        <
        div style = {
            { padding: '1rem' } } >
        <
        Routes >
        <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/dashboard"
        element = { <
            ProtectedRoute >
            <
            Dashboard / >
            <
            /ProtectedRoute>
        }
        /> <
        Route path = "/profile"
        element = { <
            ProtectedRoute >
            <
            Profile / >
            <
            /ProtectedRoute>
        }
        /> <
        Route path = "/"
        element = { < Login / > }
        /> <
        /Routes> <
        /div> <
        /BrowserRouter> <
        /AuthProvider>
    );
}

export default App;