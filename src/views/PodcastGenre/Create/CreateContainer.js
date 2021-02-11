import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {getFormValues,setErrors} from './../../../helper';
import {schema} from './../../../validation/podcast/genre/create';
import {createPodcastGenre} from './../../../store/podcasts/genres/actions';

import CreateGenre from './../../../components/Genres/Create/Create';


const CreateContainer = (props) => {

	const dispatch = useDispatch();

	const history = useHistory();

	const [dialogOpen,setDialogOpen] = useState(false);

	const {register,control,handleSubmit,errors,setError,reset} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(schema)
	});

	const isFetching = useSelector(state => state.podcastGenres.isFetching);

	const onSubmit = async(data) => {
		let formData = getFormValues(data);
		let response = await dispatch(createPodcastGenre(formData));
		if(response?.errors)
		{
			setErrors(response.errors,setError);
		}
		else
		{	
			setDialogOpen(true);
			setTimeout(() => {
				closeDialog();
				history.push('/admin/podcasts/genres/list');
			},2000);
		}
	}

	const closeDialog = () => {
		setDialogOpen(false);
	}

	const onReset = () => {
		reset();
	}


	return(
		<CreateGenre 
			register={register}
			onSubmit={handleSubmit(onSubmit)}
			errors={errors}
			control={control}
			//
			dialogOpen={dialogOpen}
			closeDialog={closeDialog}
			isFetching={isFetching}
			onReset={onReset}
			title="Создать жанр"
		/>
	)
}

export default CreateContainer;