import React, { useState } from 'react';

const AuthView = props => {
  if (this.props.isSignedIn === null) {
    return null;
  } else if (this.props.isSignedIn) {
    return (
      <button onClick={this.props.onSignOutClick} className="ui red google button">
        <i className="google icon" />
        Sign Out
      </button>
    );
  } else {
    return (
      <button onClick={this.props.onSignInClick} className="ui red google button">
        <i className="google icon" />
        Sign In With Google
      </button>
    );
  }
};

export default AuthView;
