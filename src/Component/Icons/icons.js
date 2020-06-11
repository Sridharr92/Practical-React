import React from 'react';
import {IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import IconsClass from './iconsClass';
import './icons.css';

function Icons(){
	return(
<IconContext.Provider value={{color:'blue',size:'5rem'}}>
		<div>
			<h3> Lets go for a <FaReact />? </h3>
			<IconsClass />
		</div>	
</IconContext.Provider>
	);
}

export default Icons;
