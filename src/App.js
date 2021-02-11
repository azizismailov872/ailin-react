import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import AdminLayout from './layouts/Admin';

const App = (props) => {
	/*return(
		!props.isAuth ? (
			<Switch>
				<Route exact path="/admin/login" render={(props) => <AuthLayout {...props} />} />
				<Redirect from="/admin/*" to="/admin/login" />
			</Switch>
		) : (
			<Switch>
				<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
			</Switch>	
		)
	)*/
	return(
		<Switch>
			<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
			<Redirect from="*" to="/admin" />
		</Switch>
	)
}

export default App;
