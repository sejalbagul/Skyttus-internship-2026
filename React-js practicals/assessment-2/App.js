import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    return ( <
        div className = { styles.app } >
        <
        Header / >
        <
        main >
        <
        SearchBar searchTerm = { searchTerm }
        setSearchTerm = { setSearchTerm }
        /> <
        Banner / >
        <
        ProductList searchTerm = { searchTerm }
        /> <
        /main> <
        Footer / >
        <
        /div>
    );
}

export default App;
