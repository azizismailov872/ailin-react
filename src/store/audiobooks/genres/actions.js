import {searchBookGenre,getBookGenres,deleteBook,createBook,updateBook,getGenre} from './../../../api/audioBookGenreAPI';
import {SET_GENRES,SET_FETCHING} from './types';


export const setFetching = (payload) => ({type:SET_FETCHING, payload});

export const setGenres = (genres,payload) => ({type: SET_GENRES,genres,payload});


export const getAudioBookGenres = (pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await getBookGenres(pageNumber,pageSize);
		if(response.data.data.length > 0)
		{	
			let payload ={ 
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			}
			dispatch(setGenres(response.data.data,payload));
			dispatch(setFetching(false));
		}
	}
	catch(error)
	{
		if(error.response)
		{
			console.log(error?.response?.data?.message);
		}
	}
}

export const searchAudioBookGenres = (data,pageNumber = 1,pageSize = 10) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await searchBookGenre(data,pageNumber,pageSize);
		if(response.data)
		{	
			let payload ={ 
				current_page: response.data.current_page,
				per_page: response.data.per_page,
				total: response.data.total
			}
			dispatch(setGenres(response.data.data,payload));
			dispatch(setFetching(false));
		}
	}catch(error)
	{
		if(error.response)
		{
			console.log(error.response.data.message);
		}
	}
}

export const deleteAudioBookGenre = (id) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await deleteBook(id);
		if(response.data.status === 1)
		{
			return true;
		}
	}catch(error)
	{
		return false;
	}
}

export const createAudioBookGenre = (data) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await createBook(data);
		if(response.data.status === 1)
		{
			dispatch(setFetching(false));
		}
	}catch(error)
	{
		if(error.response)
		{	
			dispatch(setFetching(false));
			return {
				errors: error.response.data.errors
			}
		}
	}
}

export const updateAudioBookGenre = (data,id) => async dispatch => {
	try{
		dispatch(setFetching(true));
		let response = await updateBook(data,id);
		if(response.data.status === 1)
		{
			dispatch(setFetching(false));
		}
	}catch(error)
	{
		if(error.response)
		{	
			dispatch(setFetching(false));
			return {
				errors: error.response.data.errors
			}
		}
	}
}

export const getAudioBookGenre = (id) => async dispatch => {
	try{
		let response = await getGenre(id);
		if(response.data.status === 1)
		{
			return response.data.genre;
		}
	}catch(error)
	{
		if(error.response)
		{
			return {
				errors: error.response.data.errors
			}
		}
	}
}