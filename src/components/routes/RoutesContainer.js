import React, { Component } from 'react';
import RoutesView from './RoutesView';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { me } from '../../thunks';

class RoutesContainer extends Component {
  componentDidMount() {
    this.props.loadInitialData(this.props.userId);
  }
  render() {
    return <RoutesView isLoggedIn={this.props.isLoggedIn} />;
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData: userId => dispatch(me(userId))
  };
};

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));
