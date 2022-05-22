import React, { useState, useEffect } from 'react';
import './navbar.scss';

function NavBar() {
  const [categoryList, setCategoryList] = useState([]);
  const fetchCategories = () => {
    fetch('https://don-photo-app-backend.herokuapp.com/api/v1/categories').then(
      (resp) => resp.json().then((data) => setCategoryList(data))
    );
  };
  return (
    <nav role='navigation' class='primary-navigation'>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a onMouseOver={fetchCategories} href='#'>
            Photography
          </a>

          <ul class='dropdown'>
            {categoryList
              ? categoryList.map((category) => (
                  <li>
                    <a href='#'>{category.name}</a>
                  </li>
                ))
              : null}
          </ul>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
