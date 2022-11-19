import { useMatch } from '@tanstack/react-location';

import Card from 'components/Content/blog/card/Card';
import NavBar from 'components/Content/navBar/NavBar';

import './home.scss';

function Home() {
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
