import React, { useState, useEffect } from 'react';
import Form from 'components/form/Form';
import UserForm from 'components/form/UserForm';

function Login(props) {
  const { updatePosts } = props;

  const [input, setInput] = useState('');
  const [validPassword, setValidPassword] = useState(false);

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
      {localStorage.getItem('admin') === 'true' ? (
        <Form updatePosts={updatePosts} />
      ) : (
        <UserForm setInput={setInput} passwordMatch={passwordMatch} />
      )}
    </div>
  );
}

export default Login;
