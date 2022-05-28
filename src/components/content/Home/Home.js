import { useMatch } from '@tanstack/react-location';

import Card from 'components/content/blog/Card/Card';
import NavBar from 'components/content/NavBar/NavBar';

import './home.scss';

function Home() {
  const {
    data: { posts },
  } = useMatch();

  return (
    <div className='main'>
      <NavBar />
      <div className='images_container'>
        {posts.data.map((image, index) => (
          <Card image={image} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
