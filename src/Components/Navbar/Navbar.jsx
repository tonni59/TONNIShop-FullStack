import React, { useContext, useEffect, useRef, useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const navigate = useNavigate();

  // 🔐 Login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check login status on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // ✅ React to localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ✅ Dropdown toggle
  const dropdown_toggle = () => {
    menuRef.current.classList.toggle('open');
  };

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className='navbar'>
      {/* Logo */}
      <div className='nav-logo'>
        <img src={logo} alt='TONNI Logo' />
        <p>TONNI</p>
      </div>

      {/* Mobile Dropdown */}
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt='menu' />

      {/* Menu */}
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => setMenu("shop")}>
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      {/* Login & Cart */}
      <div className='nav-login-cart'>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}

        <Link to='/cart'>
          <img src={cart_icon} alt='cart' />
        </Link>

        {/* ✅ Correct dynamic quantity */}
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
