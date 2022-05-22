import React, { useState, useEffect } from 'react';
import Card from 'components/content/blog/Card';
import NavBar from 'components/content/NavBar';
import ReactDOM from 'react-dom';
import { useMatch } from '@tanstack/react-location';

import '../../styles/home.scss';

function Home() {
  const {
    data: { posts },
  } = useMatch();

  return (
    <div className="main">
      <NavBar />
      <div className="images_container">
      {posts.data.map((image) => (
        <Card image={image} />
      ))}
      </div>
    </div>
  );
}

export default Home;
