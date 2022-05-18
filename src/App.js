import 'App.css';
import Home from 'components/content/Home';
import Admin from 'components/content/Admin';
import axios from 'axios';
import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { ReactLocation, Router } from '@tanstack/react-location';

function App() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const location = new ReactLocation();

  function updatePosts(post) {
    setPosts([...posts, post]);
  }

  async function fetchPosts() {
    await new Promise((r) => setTimeout(r, 300));
    return await axios.get(
      'https://don-photo-app-backend.herokuapp.com/api/v1/photos'
    );
  }

  return (
    <Router
      location={location}
      routes={[
        {
          path: '/',
          element: <Home />,
          loader: async () => {
            return {
              posts: await fetchPosts(),
            };
          },
        },
        { path: '/admin', element: <Admin updatePosts={updatePosts} /> },
      ]}
    />
  );
}

export default App;
