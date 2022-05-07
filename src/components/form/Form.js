import UploadForm from 'components/form/UploadForm';
import CategoryForm from 'components/form/CategoryForm';

function Form(props) {
  const updatePosts = props;
  return (
    <div>
      <h2>Welcome Uncle Don!</h2>
      <UploadForm updatePosts={updatePosts} />
      <CategoryForm />
    </div>
  );
}

export default Form;
