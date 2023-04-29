import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

import './photo.scss';

function Photo(props) {
  const photo_id = localStorage.getItem('photo_id');
  const cld = new CloudinaryImage(photo_id, {
    cloudName: process.env.REACT_APP_CLOUDINARY_KEY,
  }).resize(fill().width(275).height(275));

  console.log(props);
  return (
    <div>
      <div>
        <AdvancedImage className='new_card' cldImg={cld} />
      </div>
    </div>
  );
}

export default Photo;
