import 'App.css';
import Home from 'components/content/Home';
import Admin from 'components/content/Admin';

import React, { useState, useEffect } from 'react';
import {
  Link,
  MakeGenerics,
  Outlet,
  ReactLocation,
  Router,
  useMatch,
} from '@tanstack/react-location';

function App() {
  const [posts, setPosts] = useState([]);

  const location = new ReactLocation();

  function updatePosts(post) {
    setPosts([...posts, post]);
  }

  useEffect(() => {
    fetch('https://don-photo-app-backend.herokuapp.com/api/v1/photos')
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <Home posts={posts} /> },
        { path: '/admin', element: <Admin updatePosts={updatePosts} /> },
      ]}
    />
  );
}

export default App;
