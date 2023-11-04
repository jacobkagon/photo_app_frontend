import { ReactLocation, Router } from '@tanstack/react-location';

//enable for production
import About from 'components/content/About/About';
import Admin from 'components/content/admin/Admin';
import Photo from 'components/content/blog/Card/Photo';
import Home from 'components/content/Home/Home';

//enable in testing env
// import About from './components/Content/about/About';
// import Photo from './components/Content/blog/card/Photo';
// import Admin from './components/Content/admin/Admin';
// import Home from './components/Content/home/Home';

function App() {
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
        { path: '/about', element: <About /> },
        { path: '/photo', element: <Photo /> },
      ]}
    />
  );
}

export default App;
