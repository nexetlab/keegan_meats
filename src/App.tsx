// src/App.tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import './assets/styles/global.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Products = lazy(() => import('./pages/Products/Products'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

function App() {
  return (
    <Router>
      <div className="app" style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main className="main-content" style={{ flex: 1, width: '100%' }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;