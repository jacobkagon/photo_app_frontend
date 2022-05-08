import React, { useState, useEffect } from 'react';
import Card from 'components/content/blog/Card';
import NavBar from 'components/content/NavBar';

function Home(props) {
  const { posts } = props;

  return (
    <div>
      <NavBar />
      <h3>Don Ashbrook</h3>
      {posts.map((image) => (
        <Card image={image} />
      ))}
    </div>
  );
}

export default Home;
