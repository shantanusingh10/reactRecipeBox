import { combineReducers } from 'redux';
import RecipeList from './reducer_recipe_list';

const rootReducer = combineReducers({
	recipeList: RecipeList
});

export default rootReducer;