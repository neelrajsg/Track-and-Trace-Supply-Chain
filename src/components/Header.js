import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-secondary p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl">Track & Trace</h1>
        <ul className="flex space-x-4">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><button className="bg-secondary text-primary px-4 py-2 rounded">Login</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
