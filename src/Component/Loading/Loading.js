import React from 'react'
import {BounceLoader, BarLoader,BeatLoader} from 'react-spinners'
function Load(){
	return(
		<div>
			<BounceLoader size={23} color='red' loading />
			<BarLoader  size={48} color='orange' loading />
			<BeatLoader  size={72} color='blue' loading />
		</div>
	)
}

export default Load;