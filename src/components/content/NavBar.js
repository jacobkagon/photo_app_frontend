import React, { useState, useEffect } from 'react';
import 'navbar.css';

function NavBar() {
  const [categories, setCategories] = useState([]);

  return (
    <div class='navbar'>
      <a class='item'>Home</a>
      <a class='item'>Photography</a>
      <a class='item'>About</a>
    </div>
  );
}

export default NavBar;
