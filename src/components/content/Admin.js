import { useState } from 'react';

import NavBar from 'components/Content/NavBar/NavBar';
import Form from 'components/form/Form';
import UserForm from 'components/form/UserForm';

function Admin(props) {
  const { updatePosts } = props;

  const [input, setInput] = useState('');
  const [, setValidPassword] = useState(false);

  const passwordMatch = (e) => {
    e.preventDefault();
    if (input === process.env.REACT_APP_SECRET_CODE) {
      localStorage.setItem('admin', true);
      setValidPassword(true);
    } else {
      window.alert('Incorrect password. Please try again');
    }
  };

  return (
    <div>
      <NavBar />
      {localStorage.getItem('admin') === 'true' ? (
        <Form updatePosts={updatePosts} />
      ) : (
        <UserForm setInput={setInput} passwordMatch={passwordMatch} />
      )}
    </div>
  );
}

export default Admin;
