import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import Admin from './views/Admin'

const App = () => {



	return (
		<>
			<Router>

				<Switch>
					<Route exact path='/'><Home /></Route>
					<Route exact path='/:id/Admin'><Admin /></Route>
				</Switch>

			</Router>
		</>
	)
}


export default App;