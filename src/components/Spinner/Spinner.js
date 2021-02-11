import React from 'react';
import './Spinner.css';
const Spinner = (props) => {
	return(
		<div className="spinner-container">
			<div className="spinner">
			  <div className="circle"></div>
			  <div className="circle"></div>
			  <div className="circle"></div>
			</div>
		</div>
	)
}

export default Spinner;