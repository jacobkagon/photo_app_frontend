import React, { useState, useEffect } from 'react';
import Card from 'components/content/blog/Card';

function Home(props) {
  const { posts } = props;

  return (
    <div>
      <Card post={posts} />
    </div>
  );
}

export default Home;
