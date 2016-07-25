import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import checkCredentials from './modules/security';

import App from './components/app';
import Login from './components/login';
import Home from './components/home';
import Error from './components/error';
import NotFound from './components/not-found';

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Login}/>
			<Route path="/login" component={Login}/>
			<Route path="/home" component={Home} onEnter={checkCredentials}/>
			<Route path="/error" component={Error}/>
		</Route>
		<Route path="*" component={NotFound} />
	</Router>,
	document.getElementById('app')
);
