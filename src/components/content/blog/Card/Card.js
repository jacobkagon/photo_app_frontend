import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

import './card.scss';

function Card({ photo_id }) {
  const cld = new CloudinaryImage(photo_id, {
    cloudName: process.env.REACT_APP_CLOUDINARY_KEY,
  }).resize(fill().width(275).height(275));

  const setPhotoId = (photo_id) => {
    localStorage.setItem('photo_id', photo_id);
    console.log(photo_id);
  };

  return (
    <div>
      {console.log(photo_id)}
      <div className='gallery-item'>
        <a href='/photo'>
          <div>
            <AdvancedImage
              className='card-image'
              cldImg={cld}
              onClick={() => setPhotoId(photo_id)}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
