import React,{useEffect} from 'react';
import {instance} from './api/api';
function App() {

	useEffect(async() => {
		let response = await instance.get('/audiobook');
		console.log(response);
	},[])


  return (
    <div className="App">
       App
    </div>
  );
}

export default App;
