import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const App = (props) => (
	<div>
		<h1>Hello World</h1>
	</div>
)

render(
	<Router history={browserHistory}>
		<Route path='/'>
			<IndexRoute component={App}/>
		</Route>
	</Router>,
	document.getElementById('root')
)