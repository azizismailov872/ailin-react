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
			else 
			{
				formData.append(field,data[field]);
			}
		}

		return formData;
	}else {
		return null;
	}

}