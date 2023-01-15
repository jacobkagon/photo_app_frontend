//import { useState } from 'react';

import { ReactLocation, Router } from '@tanstack/react-location';

import About from 'components/content/About/About';
import Admin from 'components/content/Admin';
import Home from 'components/content/Home/Home';

import 'App.css';

// import About from './components/Content/about/About';
// import Admin from './components/Content/admin/Admin';
// import Home from 'components/content/Home/Home';
// import Home from './components/Content/home/Home';

function App() {
  //const [posts, setPosts] = useState([]);
  const location = new ReactLocation();

  return (
    <Router
      location={location}
      routes={[
        {
          path: '/',
          element: <Home />,
          loader: async () => {
            return {};
          },
        },
        { path: '/admin', element: <Admin /> },
        { path: 'about', element: <About /> },
      ]}
    />
  );
}

export default App;
