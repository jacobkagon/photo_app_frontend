import { useMatch } from '@tanstack/react-location';

import Card from 'components/content/blog/Card/Card';
import NavBar from 'components/content/NavBar/NavBar';

import './home.scss';

function Home() {
  //change routes back for testing
  const {
    data: { posts },
  } = useMatch();

  return (
    <div>
      <NavBar />
      <div>
        <ul className='images_container'>
          {posts.data.map((image, index) => (
            <Card image={image} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
