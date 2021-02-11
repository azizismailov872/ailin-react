import {instance} from './api';


export const searchBookGenre = (data,pageNumber,pageSize) => {
	return instance.post(`/audiobooks/search?page=${pageNumber}&pageSize=${pageSize}`,data);
}

export const getBookGenres = (pageNumber,pageSize) => {
	return instance.get(`/audiobooks/list?page=${pageNumber}&pageSize=${pageSize}`);
}

export const deleteBook = (id) => {
	return instance.get(`/audiobooks/delete/${id}`);
}

export const createBook = (data) => {
	return instance.post('/audiobooks/create',data);
}

export const updateBook = (data,id) => {
	return instance.post(`/audiobooks/update/${id}`,data);
}

export const getGenre = (id) => {
	return instance.get(`/audiobooks/one/${id}`);
}