export const setErrors = (errors,setError) => {
	if(errors)
	{
		for(let error in errors)
		{	
			setError(error,{
				type: 'server',
				message: errors[error].message
			});
		}
	}
}

export const getFormValues = (data) => {
	let formData = new FormData();
	if(data){
		for(let field in data)
		{	
			if(field === 'status')
			{
				if(data[field] !== 2)
				{
					formData.append(field,data[field]);
				}
			}
			else if(field === 'photo')
			{
				formData.append('photo',data.photo[0]);
			}
			else if(field === 'passwordRepeat')
			{
				console.log('password');
			}
			else 
			{	
				if(data[field].length > 0)
				{
					formData.append(field,data[field]);
				}	
			}
		}

		return formData;
	}else {
		return null;
	}

}

export const getApplicationFormValues = (data) => {
	let formData = new FormData();
	if(data){
		for(let field in data)
		{	
			if(field === 'status')
			{
				if(data[field] !== 3)
				{
					formData.append(field,data[field]);
				}
			}
			else if(field === 'photo')
			{
				formData.append('photo',data.photo[0]);
			}
			else if(field === 'passwordRepeat')
			{
				console.log('password');
			}
			else 
			{	
				if(data[field].length > 0)
				{
					formData.append(field,data[field]);
				}	
			}
		}

		return formData;
	}else {
		return null;
	}
}

export const getFormValuesWithFiles = (data) => {
	let promise = new Promise((resolve,reject) => {
		let formData = new FormData();
		if(data)
		{
			for(let field in data)
			{
				if(field === 'status')
				{
					if(data[field] !== 2)
					{
						formData.append(field,data[field]);
					}
				}
				else if(field === 'ru_file')
				{
					formData.append('ru_file',data.ru_file[0]);
				}
				else if(field === 'en_file')
				{
					formData.append('en_file',data.en_file[0]);
				}
				else if(field === 'kz_file')
				{
					formData.append('kz_file',data.kz_file[0]);
				}
				else if(field === 'kg_file')
				{
					formData.append('kg_file',data.kg_file[0]);
				}
				else if(field === 'uz_file')
				{
					formData.append('uz_file',data.uz_file[0]);
				}
				else if(field === 'tg_file')
				{
					formData.append('tg_file',data.tg_file[0]);
				}
				else
				{
					formData.append(field,data[field]);
				}
			}

			resolve(formData);
		}

		resolve(null);
	});
	return promise;
}

export const getFormVideos = (data) => {
	let promise = new Promise((resolve,reject) => {
		let formData = new FormData();
		if(data)
		{
			for(let field in data)
			{
				if(field === 'ru_video')
				{
					formData.append('ru_video',data.ru_video[0]);
				}
				else if(field === 'en_video')
				{
					formData.append('en_video',data.en_video[0]);
				}
				else if(field === 'kz_video')
				{
					formData.append('kz_video',data.kz_video[0]);
				}
				else if(field === 'kg_video')
				{
					formData.append('kg_video',data.kg_video[0]);
				}
				else if(field === 'uz_video')
				{
					formData.append('uz_video',data.uz_video[0]);
				}
				else if(field === 'tg_video')
				{
					formData.append('tg_video',data.tg_video[0]);
				}
				else
				{
					formData.append(field,data[field]);
				}
			}

			resolve(formData);
		}

		resolve(null);
	});
	return promise;
}

export const bytesToSize = (bytes) =>  {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	if (!bytes) {
    	return '0 Byte'
  	}
  	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  	return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
}