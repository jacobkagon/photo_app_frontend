import { useEffect, useState } from 'react';

import UploadForm from 'components/form/UploadForm';
import CategoryForm from 'components/form/CategoryForm';

function Form(props) {
  const [state, changeState] = useState('');
  const updatePosts = props;

  return (
    <div>
      <h2>Welcome Uncle Don!</h2>
      <UploadForm state={state} updatePosts={updatePosts} />
      <CategoryForm changeState={changeState} />
    </div>
  );
}

export default Form;
