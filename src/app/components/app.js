import React, { Component} from 'react';
import Title from './title';
import RecipeList from '../containers/recipe-list';
import AddRecipeButton from '../containers/add-recipe-btn';

export default class App extends Component{

	render(){
		return(
			<div>
				<Title />
				<RecipeList />
				<AddRecipeButton />
			</div>
		);
	}
}
