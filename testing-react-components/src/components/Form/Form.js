import React from 'react';

const Form = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    console.log(e.target.elements);
    onSubmit({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '35%' }}>
        <label htmlFor="username-field">Username</label>
        <input id="username-field" name="username" type="text" />
        <label htmlFor="password-field">Password</label>
        <input id="password-field" name="password" type="password" />
      </div>
      <input type="submit" />
    </form>
  );
};

export default Form;