"use client";
import { Search, Heart, ShoppingBag, User, ChevronDown, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="site-header">
      <div className="top-ann">
        <span>Lorem ipsum dolor</span>
        <span className="sep">|</span>
        <span>Lorem ipsum dolor</span>
        <span className="sep">|</span>
        <span>Lorem ipsum dolor</span>
      </div>

      <div className="header-main">
        <button className="menu-btn"><img className="logoImage" src="/assets/Logo.png"/></button>
        <h1 className="logo">LOGO</h1>
        <div className="header-actions">
          <Search className="icon" />
          <Heart className="icon" />
          <ShoppingBag className="icon" />
          <User className="icon" />
          <button className="lang-btn">ENG <ChevronDown className="chev-small" /></button>
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
