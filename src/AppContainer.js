import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';

import {authUser} from './store/auth/actions';

import App from './App';
import Loader from './components/Loader/Loader';

const AppContainer = (props) => {

	const dispatch = useDispatch();

	/*useEffect(() => {
		dispatch(authUser());
	},[]);*/

	const initialized = useSelector(state => state.app.initialized);

	const isAuth = useSelector(state => state.auth.isAuth);

	/*return(
		!initialized ? <Loader /> : (
			<App isAuth={isAuth} />
		)
	)*/
	return (
		<App isAuth={isAuth} />
	)
}

export default AppContainer;


