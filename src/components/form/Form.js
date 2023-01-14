import UploadForm from 'components/form/UploadForm';

function Form(props) {
  // const [state, changeState] = useState('');
  const updatePosts = props;

  return (
    <div className='pt-3 mt-14'>
      <h2>Welcome Uncle Don!</h2>
      <UploadForm updatePosts={updatePosts} />
    </div>
  );
}

export default Form;
