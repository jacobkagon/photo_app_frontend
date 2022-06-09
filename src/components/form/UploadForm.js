import { useEffect, useState } from 'react';

function UploadForm() {
  const [image, setImage] = useState(null);
  const [caption] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    fetch('https://don-photo-app-backend.herokuapp.com/api/v1/categories').then(
      (resp) => resp.json().then((data) => setCategories(data))
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryId !== null) {
      const form = new FormData();
      form.append('image', image);
      form.append('caption', caption);
      form.append('category_id', categoryId);
      fetch('https://don-photo-app-backend.herokuapp.com/api/v1/photos', {
        method: 'POST',
        body: form,
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.info(data);
          //updatePosts(data);
        });
    } else {
      window.alert('Please choose a category first');
    }
  };

  // const handleCategoryId = (e) => {
  //   if (e.target.value !== null) {
  //     setCategoryId(e.target.value);
  //   } else {
  //   }
  // };

  return (
    <div>
      <h3>Upload Photo</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select
          name='categories'
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value='none'>Select a Category</option>
          {categories.map((category, index) => (
            <option value={category.id} key={index}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type='file'
          accept='image/jpeg'
          name='image'
          multiple={false}
          onChange={(event) => setImage(event.target.files[0])}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UploadForm;

// function Password(password) {
// const
// if password ==
//}
