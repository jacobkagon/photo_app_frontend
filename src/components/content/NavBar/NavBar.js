/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

import './navbar.scss';

function NavBar() {
  const [categoryList, setCategoryList] = useState([]);
  const fetchCategories = () => {
    fetch('https://don-photo-app-backend.herokuapp.com/api/v1/categories').then(
      (resp) => resp.json().then((data) => setCategoryList(data))
    );
  };
  return (
    <nav role='navigation' className='primary-navigation'>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a onMouseOver={fetchCategories} onFocus href='#'>
            Photography
          </a>

          <ul className='dropdown'>
            {categoryList
              ? categoryList.map((category, index) => (
                  <li key={index}>
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
