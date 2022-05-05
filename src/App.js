import 'App.css';
import Home from 'components/content/Home';
import UploadForm from 'components/form/UploadForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router>
      <Routes>
        <Route path='/' element={<Home posts={posts} />} />

        <Route
          path='/login'
          element={<UploadForm updatePosts={updatePosts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
