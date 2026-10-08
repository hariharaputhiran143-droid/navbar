
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Taste Bite</div>
         
        

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#offer">Offer</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="login-btn">Login</button>
      </nav>

      <div className="content">
        <h1>Welcome to All</h1>
      </div>
    </div>
  );
}

export default App;