import React, { Component } from 'react';
import UsersPageView from '../views/UsersPageView';
import { connect } from 'react-redux';
import { me } from '../../thunks';

class UsersPageContainer extends Component {
  componentDidMount(props) {
    console.log('users page container mounted');
    this.props.loadInitialData(this.props.match.params.id);
  }
  render() {
    const paramsId = this.props.match.params.id;
    console.log(paramsId);
    console.log(this.props.user);
    if (paramsId == this.props.user.id) { 
      console.log("yes they match")
      return <UsersPageView id={paramsId} user={this.props.user} />;
    } else {
      console.log("nope");
      return <h1>You don't have access to this page</h1>
    }
    
  }
}

const mapState = (state,ownProps) => {
  console.log(ownProps);
  console.log(state);
  return {
    // state: state,
    user: state.user,
    params: ownProps.match.params
    // cookies: ownProps.cookies
  };
};
const mapDispatch = dispatch => {
  return {
    loadInitialData: (userId) => dispatch(me(userId))
  };
};

export default connect(mapState, mapDispatch)(UsersPageContainer);
