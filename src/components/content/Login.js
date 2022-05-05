import React, { useState, useEffect } from 'react';
import UploadForm from 'components/form/UploadForm';
import CategoryForm from 'components/form/CategoryForm';
function Login(props) {
  const { updatePosts } = props;

  return (
    <div>
      <UploadForm updatePosts={updatePosts} />
      <CategoryForm />
    </div>
  );
}

export default Login;
