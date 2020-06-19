import React, { Component } from 'react';
import RoutesView from './RoutesView';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { me } from '../../thunks';


class RoutesContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { cookies: this.props };
  // }
  // this.state = { cookies: {}};
  componentDidMount() {
    console.log('routes container is mounting again');
    this.props.loadInitialData(this.props.userId);
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

    // cookies.set('email', this.props.user.email);
    // cookies.set('isLoggedIn', true);

    return (
      <RoutesView
        isLoggedIn={this.props.isLoggedIn}

      />
    );
  }
}

const mapState = (state, ownProps) => {
  console.log('from mapstate in routescontainer, this is state: ', state);
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id,
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
    loadInitialData: (userId) => dispatch(me(userId))
  };
};

// export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));
export default connect(mapState, mapDispatch)(RoutesContainer);
