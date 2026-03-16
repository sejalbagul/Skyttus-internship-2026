import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark-theme" : ""}`}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <SearchBar />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
