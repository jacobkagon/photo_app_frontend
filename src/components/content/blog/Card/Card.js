import './card.scss';
function Card(props) {
  const { image } = props;
  return (
    <div className='wrapper'>
      <a href='/' className='thumbnail-wrapper'>
        <img key='{image}' src={image} alt={image} className='thumbnail' />
      </a>
    </div>
  );
}

export default Card;
