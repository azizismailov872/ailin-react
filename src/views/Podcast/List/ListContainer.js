import React from 'react';

import List from './../../../components/Content/List/List';

const ListContainer = () => {
	return(
		<List 
			createLink="/admin/podcasts/create"
			title="Подкасты"
		/>
	)
}

export default ListContainer;