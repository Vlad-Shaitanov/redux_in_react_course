import React, {Component} from "react";

export default class PostForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			title: "",
		};
	}

	submitHandler = event => {
		event.preventDefault();
		const {title} = this.state;

		const newPost = {
			title,
			id: Date.now().toString(),
		};
		console.log(newPost);

		this.setState({title: ""});
	};

	changeInputHandler = event =>{
		event.persist();
		//Универсальная обработка значения инпута
		this.setState(prev => ({...prev, ...{
			[event.target.name]: event.target.value,
		}}));
	};

	render(){
		return (
			<form onClick={this.submitHandler}>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">Заголовок поста</label>
					<input
						type="text"
						className="form-control"
						id="title"
						name="title"
						value={this.state.title}
						onChange={this.changeInputHandler}/>
				</div>
				<button className="btn btn-success" type="submit">Создать</button>
			</form>
		);
	}
}