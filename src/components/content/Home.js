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
      {post.map((image) => (
        <div className="img">
          {console.log(image)}
          <img key="{image}" src={image} />
        </div>
      ))}
    </div>

    //<Card post={post} />
  );
}

export default Home;
