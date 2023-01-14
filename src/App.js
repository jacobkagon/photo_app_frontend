//we may want to get rid of admin page
//import { useState } from 'react';

import { ReactLocation, Router } from '@tanstack/react-location';
import axios from 'axios';

// import About from 'components/content/About/About';
//import Admin from 'components/content/Admin';
// import Home from 'components/content/Home/Home';
import 'App.css';
import 'App.css';

import About from './components/Content/about/About';
import Admin from './components/Content/admin/Admin';
// import Home from 'components/content/Home/Home';
import Home from './components/Content/home/Home';

function App() {
  //const [posts, setPosts] = useState([]);
  const location = new ReactLocation();

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
        { path: '/admin', element: <Admin /> },
        { path: 'about', element: <About /> },
      ]}
    />
  );
}

export default App;
