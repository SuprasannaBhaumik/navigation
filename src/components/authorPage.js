import  React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AuthorPage extends Component {

	constructor(props) {
		super(props);
		this.state={
			authors: []
		};
	}

	componentDidMount() {
		axios.get('http://localhost:3000/authors')
			 .then( (response) => {
				 this.setState({
					 authors : response.data
				 })
			  });
	}

	

	render() {
		let data = "Hello";
		if(this.state.authors.length === 0) {
			return false;
		}	
		
		data = this.state.authors.map( (user, i) => {
			return (
					<li key={i}>
						<Link to={`/authors/${user.id}`}>
							{user.name}
						</Link>
					</li>
				)
	 	});
		
		return(
			<div>
				<ul>
					 {data}
				</ul>
			</div>	
		)
	}	
};

export default AuthorPage;