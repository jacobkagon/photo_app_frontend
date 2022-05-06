import React, { useState, useEffect } from 'react';
import Card from 'components/content/blog/Card';
import NavBar from 'components/content/NavBar';

function Home(props) {
  const { posts } = props;

  return (
    <div>
      <h3>Don Ashbrook</h3>
      <NavBar />
      {posts.map((image) => (
        <Card image={image} />
      ))}
    </div>
  );
}

export default Home;
