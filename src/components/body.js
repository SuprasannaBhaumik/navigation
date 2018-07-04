import React from 'react';
import Home from './homePage';
import AboutPage from './aboutPage';
import AuthorPage from './authorPage';

import { Switch, Route } from 'react-router-dom';

const Body = () => {
	
	return(
		<div>
			<Switch>
				<Route path="/"  exact component={Home} />
				<Route path="/authors" component={AuthorPage} />
				<Route path="/about" component={AboutPage} />
			</Switch>	
		</div>
	)
}

export default Body;