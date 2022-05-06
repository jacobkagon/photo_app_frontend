import React, { useState, useEffect } from 'react';

function NavBar() {
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <a>Home</a>
      <a>Photography</a>
      <a>About</a>
    </div>
  );
}

export default NavBar;
