// import { useMatch } from '@tanstack/react-location';

import './home.scss';

// import Card from 'components/content/blog/Card/Card';
// import Card from '../blog/card/Card';
// import NavBar from 'components/content/NavBar/NavBar';
import NavBar from '../navBar/NavBar';

function Home() {
  //change routes back for testing
  // const {
  //   data: { posts },
  // } = useMatch();

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default Home;
