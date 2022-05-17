import React, { useState, useEffect } from 'react';
import Card from 'components/content/blog/Card';
import NavBar from 'components/content/NavBar';
import ReactDOM from 'react-dom';
import { useMatch } from '@tanstack/react-location';

function Home() {
  const {
    data: { posts },
  } = useMatch();

  return (
    <div>
      {console.log(posts.data)}
      <NavBar />
      {posts.data.map((image) => (
        <Card image={image} />
      ))}
    </div>
  );
}

export default Home;
