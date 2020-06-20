import React from 'react';
import AnimeCategoriesPageView from '../views/AnimeCategoriesPageView';
import { connect } from 'react-redux';

const AnimeCategoriesPageContainer = props => {
	return (
		<div>
			<h1> Top matches for: {props.match.params.categories}</h1>
			{console.log('Magic Tavern Cat', props.animeCat)}
			<AnimeCategoriesPageView anime={props.animeCat} />
		</div>
	);
};
const mapState = state => {
	console.log('Hello from the magic tavern =>', state.categoriespage.data);
	return {
		animeCat: state.categoriespage.data,
	};
};
export default connect(mapState)(AnimeCategoriesPageContainer);
