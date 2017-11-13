let recipeId = 2;
export function AddRecipe(recipe) {
	
	return {
		type: 'ADD_RECIPE',
		id: recipeId++,
		title: recipe.title,
		ingredients: recipe.ingredients,
		image: recipe.image
	};
}

export function DeleteRecipe(recipe) {

	recipeId--;
	return {
		type: 'DELETE_RECIPE',
		id: recipe.id
	};
}

export function EditRecipe(recipe) {

	return {
		type: 'EDIT_RECIPE',
		id: recipe.id,
		title: recipe.title,
		ingredients: recipe.ingredients,
		image: recipe.image	
	};
}