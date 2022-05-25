import React from 'react';
import Card from 'components/Content/blog/Card/Card';
import NavBar from 'components/Content/NavBar/NavBar';
import { useMatch } from '@tanstack/react-location';

import './home.scss';

function Home() {
  const {
    data: { posts },
  } = useMatch();

  return (
    <div className='main ml-7 mr-7 sm:ml-0 md:mr-0'>
      <NavBar />
      <div className='images_container'>
        {posts.data.map((image) => (
          <Card image={image} />
        ))}
      </div>
    </div>
  );
}

export default Home;
