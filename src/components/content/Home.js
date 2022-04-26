import React, { useState, useEffect } from "react";
import Card from "./blog/Card";
function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/photos")
      .then((resp) => resp.json())
      //.then((data) => console.log(data))
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <Card post={post} />
    </div>
  );
}

export default Home;
