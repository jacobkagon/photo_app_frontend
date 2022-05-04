import React, { useState, useEffect } from 'react';

function CategoryForm() {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      name: categoryName,
    };
    fetch('https://don-photo-app-backend.herokuapp.com/api/v1/categories', {
      method: 'POST',
      body: form,
    });
  };

  return (
    <div>
      <h3>Add Category:</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder='Africa 2017'
          type='text'
          onChange={(event) => setCategoryName(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default CategoryForm;
