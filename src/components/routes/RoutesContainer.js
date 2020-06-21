import React, { Component } from 'react';
import RoutesView from './RoutesView';
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

const mapState = (state, ownProps) => {
	return {
		isLoggedIn: !!state.user.id,
		userId: state.user.id,
		user: state.user,
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
		loadInitialData: userId => dispatch(me(userId)),
	};
};

// export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));
export default connect(mapState, mapDispatch)(RoutesContainer);
