import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddRecipe } from '../actions/index';
import Modal from 'react-modal';

class AddRecipeButton extends Component {
	
	constructor() {
    	super();
 
    	this.state = {
      		modalIsOpen: false,
      		title: "",
      		ingredients: [],
      		image: ""
    	};
 
    	this.openModal = this.openModal.bind(this);
    	this.afterOpenModal = this.afterOpenModal.bind(this);
    	this.closeModal = this.closeModal.bind(this);
    	this.onURLChange = this.onURLChange.bind(this);
    	this.onAddButtonClick = this.onAddButtonClick.bind(this);
    	this.onIngChange = this.onIngChange.bind(this);
    	this.onTitleChange = this.onTitleChange.bind(this);
  	}

	openModal() {
	    this.setState({title: "",ingredients: "",image: "",modalIsOpen: true});
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
		let y = event.target.value;
		console.log(y);
		this.setState({image: y});
	}

	onAddButtonClick(){
		this.props.AddRecipe({title: this.state.title,ingredients: this.state.ingredients,image: this.state.image});
		this.setState({modalIsOpen: false});
	}
	render() {
		return (
			<div>
			<button className="btn btn-large Add-btn btn-primary" onClick={this.openModal}>
				Add Recipe
			</button>
			<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className={{
   			 base: 'myClass',
			    afterOpen: 'myClass_after-open',
			    beforeClose: 'myClass_before-close'
			  }}
        	>
     	
          <div id="modal-header">Add Recipe <button onClick={this.closeModal} id="close-btn">&times;</button></div>
          <hr id="modal-hr"></hr>
          <div>
	          <label className="modal-item m1">Recipe Title</label>
	          <input className="modal-item m2" placeholder="Enter Recipe title here" value={this.state.title} type="text" id="modal-recipe-title" onChange={this.onTitleChange}></input>
	          <label className="modal-item m1">Ingredients (Seperated by commas ,)</label>
	          <input className="modal-item m2" placeholder="Enter ingredients here" value={this.state.ingredients} type="text" id="modal-recipe-ingredients" onChange={this.onIngChange}></input>
	          <label className="modal-item m1">Recipe Image url</label>
	          <input className="modal-item m2" placeholder="Enter image url here" value={this.state.image} type="text" id="modal-img-url" onChange={this.onURLChange}></input>
          </div>
          {console.log(this.state.title + " " + this.state.ingredients + " " + this.state.image)}
          <hr></hr>
          <button className="btn" id="modal-close-btn" onClick={this.closeModal}>Close</button>
          <button className="btn btn-primary" id="final-add-btn" onClick={ this.onAddButtonClick}>Add</button>

        </Modal>
        </div>
		)
	}
}


function mapStateToProps(state){
	return {
			recipeList: state.recipeList
		};
}

function mapDispactchToProps(dispatch){
	return bindActionCreators({ AddRecipe: AddRecipe},dispatch);
}

export default connect(mapStateToProps,mapDispactchToProps)(AddRecipeButton);