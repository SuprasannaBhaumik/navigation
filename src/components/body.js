import React from 'react';
import Home from './homePage';
import AboutPage from './aboutPage';
import AuthorPage from './authorPage';
import Author from './author';

import { Switch, Route } from 'react-router-dom';

const Body = () => {
	
	return(
		<div>
			<Switch>
				<Route path="/"  exact component={Home} />
				<Route path="/authors" exact component={AuthorPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/authors/:id" component={Author}/>
			</Switch>	
		</div>
	)
}

export default Body;