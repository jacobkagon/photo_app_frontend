import { Image } from "cloudinary-react";

function Card({ post }) {
  return (
    <div>
      {post.map((image) => (
        <div className="img">
          {console.log(image)}
          <img key="{image}" src={image} />
        </div>
      ))}
    </div>
  );
}

export default Card;
