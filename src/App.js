import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// رح نعرف الصفحات هون بشكل سريع بقلب نفس الملف حالياً
const Home = () => (
  <section className="hero">
    <h2>WELCOME TO THE FUTURE</h2>
    <p>The best gear for the best players.</p>
    <button className="cool-button">VIEW SHOP</button>
  </section>
);

const Shop = () => (
  <div className="main-shop">
    <div className="item">
      <h3>Gaming Mouse</h3>
      <p className="price">$50</p>
      <div className="spec-list">
        <li>RGB Lighting</li>
        <li>12000 DPI</li>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="hero" style={{borderStyle: 'solid'}}>
    <h2>ABOUT US</h2>
    <p>We are a retro-gaming shop founded in 2026.</p>
  </div>
);

const Contact = () => (
  <div className="features-title">
    <h2>CONTACT US</h2>
    <p>Email: support@retro.com</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="top-bar">
          <div className="logo"><h1>RETRO SHOP</h1></div>
          <nav className="links">
            <Link style={{marginRight: '10px'}} to="/">Home</Link>
            <Link style={{marginRight: '10px'}} to="/shop">Shop</Link>
            <Link style={{marginRight: '10px'}} to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>© 2026 Retro Gaming Store | Done for CSCI390</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
