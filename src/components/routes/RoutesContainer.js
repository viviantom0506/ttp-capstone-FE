import React, { Component } from 'react';
import RoutesView from './RoutesView';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { me } from '../../thunks';
import { withCookies } from 'react-cookie';

let cookies = {};

class RoutesContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { cookies: this.props };
  // }
  // this.state = { cookies: {}};
  componentDidMount() {
    console.log('routes container is mounting again');
    this.props.loadInitialData(this.props.userId, this.props.cookies);
    // console.log(this.props);
    // // setting a cookie
    // cookies = this.props.cookies;
    // console.log(this.props);
    // cookies.set('email', this.props.user.email, { path: '/' });
    // this.setState({ cookies });
    // cookies.set('email', this.props.user.email, { path: '/' });
    //getting a cookie
    // cookies.get('name');
  }

  render() {
    console.log(this.props);
    const { cookies } = this.props;
    // cookies.set('email', this.props.user.email);
    // cookies.set('isLoggedIn', true);
    console.log(cookies);
    console.log(cookies.cookies);
    return (
      <RoutesView
        isLoggedIn={this.props.isLoggedIn}
        cookies={this.props.cookies}
      />
    );
  }
}

const mapState = (state, ownProps) => {
  console.log('from mapstate in routescontainer, this is state: ', state);
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id,
    cookies: ownProps.cookies,
    user: state.user
  };
};

// const mapState = (state, ownProps) => {
//   return {
//     state: state,
//     cookies: ownProps.cookies
//   };
// };

// export default connect(mapState, null)(UsersPageContainer);

const mapDispatch = dispatch => {
  return {
    loadInitialData: (userId, cookies) => dispatch(me(userId, cookies))
  };
};

// export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));
export default withCookies(connect(mapState, mapDispatch)(RoutesContainer));
