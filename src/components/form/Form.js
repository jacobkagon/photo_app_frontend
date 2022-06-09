import { useState } from 'react';

import CategoryForm from 'components/form/CategoryForm';
import UploadForm from 'components/form/UploadForm';

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
