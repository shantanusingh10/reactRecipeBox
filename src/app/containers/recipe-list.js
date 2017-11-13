import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DeleteRecipe, EditRecipe } from '../actions/index';
import Modal from 'react-modal';

class RecipeList extends Component {
	
	constructor(){
		super();

		this.state = {
      		modalIsOpen: false,
      		id: 0,
      		title: "",
      		ingredients: [],
      		image: ""
    	};

		this.deleteRecipe = this.deleteRecipe.bind(this);
		this.openModal = this.openModal.bind(this);
    	this.afterOpenModal = this.afterOpenModal.bind(this);
    	this.closeModal = this.closeModal.bind(this);
    	this.onURLChange = this.onURLChange.bind(this);
    	this.onEditAndSaveButtonClick = this.onEditAndSaveButtonClick.bind(this);
    	this.onIngChange = this.onIngChange.bind(this);
    	this.onTitleChange = this.onTitleChange.bind(this);
	}

	openModal(recipe) {
		console.log(recipe);
	    this.setState({id: recipe.id,title: recipe.title,ingredients: recipe.ingredients,image: recipe.image,modalIsOpen: true});
	}
	 
	afterOpenModal() {
	    // references are now sync'd and can be accessed.
	    
	}
	 
	closeModal() {
	    this.setState({modalIsOpen: false});
	}

	onTitleChange(event){
		this.setState({title: event.target.value});
	}

	onIngChange(event){
		let x = event.target.value.split(",");
		this.setState({ingredients: x});
	}

	onURLChange(event){
		let y = String(event.target.value);
		this.setState({image: y});
	}
	

	deleteRecipe(recid){
		let x = {id: recid};
		this.props.DeleteRecipe(x);
	}


	onEditAndSaveButtonClick(recid){
		console.log(recid);
		this.props.EditRecipe({id: recid,title: this.state.title,ingredients: this.state.ingredients,image: this.state.image});
		this.setState({modalIsOpen: false});
	}

	renderList(){
		return  this.props.recipeList.map((recipe) => {
			return (
					<li 
						key={recipe.id} 
						className="list-group-item">	
						<div className="innerlist-div">
							<h1 className="recipe-title">{recipe.title}</h1>
							<ul className="list-group" id="hh">
								{recipe.ingredients.map((ingredients) => {
									return (
											<li key={ingredients} className="list-group-item">
												{ingredients}
											</li>
										);
								})}
							</ul>
							{console.log(recipe.image)}
							<img src= {recipe.image} />
						</div>
						<button className="btn btn-danger btn1" onClick = {() => this.deleteRecipe(recipe.id)}>Delete</button>
						<button className="btn btn-normal btn2" onClick = {() => this.openModal(recipe)}>Edit Recipe</button>
					</li>
				);
		});
	}	

	render() {
		return (
			<div id="mainlist-container">
				<ul className = "list-group">
				{this.renderList()}
				</ul>

				<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className={{
   			 base: 'EditClass',
			    afterOpen: 'emyClass_after-open',
			    beforeClose: 'emyClass_before-close'
			  }}
        	>
     	
          <div id="modal-header">Edit Recipe <button onClick={this.closeModal} id="close-btn">&times;</button></div>
          <hr id="modal-hr"></hr>
          <div>
	          <label className="modal-item m1">Recipe Title</label>
	          <input className="modal-item m2" value={this.state.title} type="text" id="modal-recipe-title" onChange={this.onTitleChange}></input>
	          <label className="modal-item m1" >Ingredients (Seperated by commas ,)</label>
	          <input className="modal-item m2" value={this.state.ingredients} type="text" id="modal-recipe-ingredients" onChange={this.onIngChange}></input>
	          <label className="modal-item m1" >Recipe Image url</label>
	          <input className="modal-item m2" value={this.state.image} type="text" id="modal-img-url" onChange={this.onURLChange}></input>
          </div>
          <button className="btn" id="modal-close-btn2" onClick={this.closeModal}>Close</button>
          <button className="btn btn-primary" id="final-edit-btn" onClick={() => this.onEditAndSaveButtonClick(this.state.id)}>Edit & Save</button>
        </Modal>		
			</div>
		);
	}
}


function mapStateToProps(state){
	return {
			recipeList: state.recipeList
		};
}

function mapDispactchToProps(dispatch){
	return bindActionCreators({ DeleteRecipe: DeleteRecipe,EditRecipe: EditRecipe},dispatch);
}

export default connect(mapStateToProps, mapDispactchToProps)(RecipeList);