import {SET_USER,SET_USER_NULL} from './types';
import {auth,login,logout} from './../../api/authAPI';
import {setInitialized} from './../actions';


const setUser = (user) => ({type:SET_USER,user});

export const authUser = () => async dispatch => {
	try{
		let response = await auth();
		debugger;
		if(response.data.status === 1)
		{	
			debugger;
			dispatch(setUser(response.data.user));
			dispatch(setInitialized(true));
		}
	}catch(error)
	{
		if(error.response)
		{
			setTimeout(() => dispatch(setInitialized(true)),2000);
		}
	}
}

export const loginUser = (data) => async dispatch => {
	try{
		let response = await login(data);
		if(response.data.status === 1)
		{
			dispatch(setUser(response.data.user));
		}
	}catch(error)
	{
		if(error.response)
		{
			return error.response.data.errors;
		}
	}
}