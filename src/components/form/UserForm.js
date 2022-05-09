import React, { useState, useEffect } from 'react';

function UserForm({ setInput, passwordMatch }) {
  return (
    <div>
      <form onSubmit={(e) => passwordMatch(e)}>
        <input
          type='password'
          placeholder='Enter Password'
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
