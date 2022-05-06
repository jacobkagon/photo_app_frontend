import { Image } from 'cloudinary-react';

function Card(props) {
  const { image } = props;
  return (
    <div>
      <div className='img'>
        <img key='{image}' src={image} />
      </div>
    </div>
  );
}

export default Card;
