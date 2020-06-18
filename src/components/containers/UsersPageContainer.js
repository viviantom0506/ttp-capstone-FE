import React, { Component } from 'react';
import UsersPageView from '../views/UsersPageView';
import { connect } from 'react-redux';

class UsersPageContainer extends Component {
  componentDidMount(props) {
    console.log('users page container mounted');
  }
  render() {
    return <UsersPageView cookies={this.props.cookies} />;
  }
}

const mapState = state => {
  console.log(state);
  return {
    state: state
    // cookies: ownProps.cookies
  };
};

export default connect(mapState, null)(UsersPageContainer);
