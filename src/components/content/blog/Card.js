import { Image } from 'cloudinary-react';
import 'card.css';
function Card(props) {
  const { image } = props;
  return (
    <div>
      <img key='{image}' src={image} />
    </div>
  );
}

export default Card;
