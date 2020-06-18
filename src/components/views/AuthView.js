import React from 'react';
import { Link } from 'react-router-dom';

const AuthFormView = props => {
  const {
    name,
    displayName,
    handleSubmit,
    error,
    handleChange,
    isLoggedIn,
    userEmail
  } = props;

  return (
    <div>
      {isLoggedIn ? `The current logged in user is: ${userEmail}` : ''}
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {displayName === 'Login' ? (
        <Link to="/signup">New user? Make an account!</Link>
      ) : (
        <Link to="/login">Already have an account? Login!</Link>
      )}
    </div>
  );
};

export default AuthFormView;
