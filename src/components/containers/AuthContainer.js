import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signIn, signOut } from '../actions';
import { GoogleLogin } from 'react-google-login';
import Axios from 'axios';

class AuthContainer extends Component {
  //   componentDidMount() {
  //     window.gapi.load('client:auth2', () => {
  //       window.gapi.client
  //         .init({
  //           clientId:
  //             '273686611110-rbtfgko0l0m13h5u27mg9qtjrcqvj850.apps.googleusercontent.com',
  //           scope: 'email'
  //         })
  //         .then(() => {
  //           this.auth = window.gapi.auth2.getAuthInstance();

  //           this.onAuthChange(this.auth.isSignedIn.get());
  //           this.auth.isSignedIn.listen(this.onAuthChange);
  //         });
  //     });
  //   }

  //   onAuthChange = isSignedIn => {
  //     if (isSignedIn) {
  //       this.props.signIn(this.auth.currentUser.get().getId());
  //     } else {
  //       this.props.signOut();
  //     }
  //   };

  onFailure = error => {
    alert(error);
  };

  //   onSignInClick = () => {
  //     this.auth.signIn();
  //   };

  //   onSignOutClick = () => {
  //     this.auth.signOut();
  //   };

  googleResponse = response => {
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      { type: 'application/json' }
    );
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };
    axios.get('http://localhost:3001/auth/google', options).then(res => {
      const token = res.headers.get('x-auth-token');
      r.json().then(user => {
        if (token) {
          //   this.setState({ isAuthenticated: true, user, token });
          this.props.signIn({ isAuthenticated: true, user, token });
        }
      });
    });
  };

  render() {
    let content = !!this.state.isAuthenticated ? null : (
      <AuthView
        clientId={config.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={this.googleResponse}
        onFailure={this.onFailure}
      ></AuthView>
    );
    return { content };
  }
}

const mapDispatch = dispatch => {
  return {
    signIn: user => dispatch(signInThunk()),
    signOut: () => dispatch(signOutThunk())
  };
};

export default connect(null, mapDispatch)(AuthContainer);
