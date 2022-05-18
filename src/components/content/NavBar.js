import React, { useState, useEffect } from 'react';
import 'navbar.css';

function NavBar() {
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <nav role='navigation' class='primary-navigation'>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Work &dtrif;</a>
            <ul class='dropdown'>
              <li>
                <a href='#'>Web Development</a>
              </li>
              <li>
                <a href='#'>Web Design</a>
              </li>
              <li>
                <a href='#'>Illustration</a>
              </li>
              <li>
                <a href='#'>Iconography</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
