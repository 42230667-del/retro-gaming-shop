import React, { useState } from 'react';
import './App.css';

const games = [
  { id: 1, title: "GTA V", price: "29.99", image: "/gta.png" },
  { id: 2, title: "The Crew Motorfest", price: "69.99", image: "/crew.png" }
];

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return (
          <header className="neon-header">
            <h1 className="neon-text">RETRO GAME SHOP</h1>
            <p className="neon-subtitle">Welcome to the future of gaming</p>
            <button className="neon-button" onClick={() => setCurrentPage('Games')}>View Shop</button>
          </header>
        );
      case 'Games':
        return (
          <main className="shop-grid">
            {games.map(game => (
              <div key={game.id} className="neon-box">
                <img src={game.image} alt={game.title} className="game-img" />
                <h3>{game.title}</h3>
                <p className="price">${game.price}</p>
                <button className="neon-button">Add to Cart</button>
              </div>
            ))}
          </main>
        );
      case 'About':
        return (
          <div className="content-section">
            <h2>About Our Store</h2>
            <p>We are the leading providers of retro and modern digital games since 2026.</p>
          </div>
        );
      case 'Contact':
        return (
          <div className="content-section">
            <h2>Contact Us</h2>
            <p>Email: support@retroshop.com</p>
            <p>Location: Beirut, Lebanon</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-logo" onClick={() => setCurrentPage('Home')}>RETRO SHOP</div>
        <ul className="nav-links">
          <li onClick={() => setCurrentPage('Home')}>Home</li>
          <li onClick={() => setCurrentPage('Games')}>Games</li>
          <li onClick={() => setCurrentPage('About')}>About</li>
          <li onClick={() => setCurrentPage('Contact')}>Contact</li>
        </ul>
      </nav>

      <div className="page-content">
        {renderPage()}
      </div>
      
      <footer className="footer">
        <p>© 2026 Retro Gaming Store | Done for CSCI390</p>
      </footer>
    </div>
  );
}

export default App;
