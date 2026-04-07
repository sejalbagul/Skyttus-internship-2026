import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';   // ← no BrowserRouter here
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

const ProductFormPage = lazy(() => import('./pages/ProductFormPage'));

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div className="main-content">
          <Suspense fallback={<div>Loading form...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/add" element={<ProductFormPage />} />
              <Route path="/products/edit/:id" element={<ProductFormPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
