import { Image } from 'cloudinary-react';
import '../../../styles/card.scss';
function Card(props) {
  const { image } = props;
  return ( 
    <div className='wrapper'>
      <a href='/' class='thumbnail-wrapper'>
        <img key='{image}' src={image} className='thumbnail'/>
      </a>
    </div>
  );
}

export default Card;
