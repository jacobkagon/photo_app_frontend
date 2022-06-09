import { useState } from 'react';

function CategoryForm(props) {
  const { changeState } = props;
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', categoryName);
    fetch('https://don-photo-app-backend.herokuapp.com/api/v1/categories', {
      method: 'POST',
      body: form,
    })
      .then((resp) => resp.json())
      .then(setCategoryName(''))
      .then(changeState('updated'));
  };

  return (
    <div>
      <h3>Add Category:</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={categoryName}
          placeholder='Category Name'
          type='text'
          onChange={(event) => setCategoryName(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default CategoryForm;
