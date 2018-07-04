import React, { Component } from 'react';
import axios from 'axios';

class Author extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			author : {}
		}
	}

	componentDidMount(){
		axios.get(`http://localhost:3000/authors/${this.props.match.params.id}`)
			 .then( (response) => {
				this.setState({
					author : response.data
				})
			 });
	}

	render() {
		return(
			<div>
				<div>{this.state.author.name}</div>
				<div>{this.state.author.title}</div>
				<div>{this.state.author.id}</div>
			</div>
		);
	}
}

export default Author;