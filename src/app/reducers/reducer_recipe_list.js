const initialState = [
					{id: 0,title: 'Paneer Butter Masala',ingredients: ['250 grams cottage cheese','10 to 12 cashew nuts','1 cup cubed onions', '1.5 cups finely chopped tomatoes', '1.5 tsp ginger garlic paste' ,'1 tbsp. oil'],image: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=750%2C563" },
					{id: 1,title: 'Dal Makhani',ingredients: ['3/4 cup black matpe beans','1/4 cup red kidney beans','2 tsp cumin seeds', '8 garlic cloves (chopped)',' 2 inches gingerroot (chopped)'],image: "http://www.sanjeevkapoor.com//UploadFiles/RecipeImages/Dal-Makhani-KhaanaKhazana.jpg" }
				];

export default function (state = initialState,action){
	switch(action.type){
		case 'ADD_RECIPE':
			return [
				...state,
				{id: action.id,title: action.title,ingredients: action.ingredients,image: action.image}
			]
		case 'DELETE_RECIPE':
			return state.filter(element => element.id!==action.id)
		case 'EDIT_RECIPE':
			console.log(state.map(state => state.id === action.id ?  state.id : action.id));
			return  state.map(state => state.id === action.id ?  {id: action.id,title: action.title,ingredients: action.ingredients,image: action.image}: state)
		default:
			return state
	}
}