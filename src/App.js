import '@/App.css';
import Home from '@/components/content/Home';
import UploadForm from '@/components/form/UploadForm';

import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  function updatePosts(post) {
    setPosts([...posts, post]);
  }

  useEffect(() => {
    fetch('https://don-photo-app-backend.herokuapp.com/api/v1/photos')
      .then((resp) => resp.json())
      //.then((data) => console.log(data))
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Don Ashbrook</h1>
      <UploadForm updatePosts={updatePosts} />
      <Home posts={posts} />
      <div></div>
    </div>
  );
}

export default App;
