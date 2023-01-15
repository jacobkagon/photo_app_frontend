import { useEffect, useRef } from 'react';
const UploadForm = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log('hi');

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloud_name: 'dcqo0ndth',
        uploadPreset: 'zw4cvgg0',
      },
      function (error, result) {
        console.log(result);
      }
    );
  }, []);

  return <button onClick={() => widgetRef.current.open()}>Upload Photo</button>;
};

export default UploadForm;
