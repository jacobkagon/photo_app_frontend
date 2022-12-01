import './card.scss';
function Card(props) {
  const { image } = props;
  return (
    <li className='thumbnail'>
      <img key='{image.image}' src={image} alt={image} className='photo' />
    </li>
  );
}

export default Card;
