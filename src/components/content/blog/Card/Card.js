import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

import './card.scss';
function Card(props) {
  const { photo_id } = props;

  const cld = new CloudinaryImage(photo_id, {
    cloudName: process.env.REACT_APP_CLOUD_NAME,
  }).resize(fill().width(275).height(275));

  return (
    <div>
      <div>
        <div className='gallery-item'>
          <AdvancedImage cldImg={cld} />
        </div>
      </div>
    </div>
  );
}

export default Card;
