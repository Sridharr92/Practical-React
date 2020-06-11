import React from 'react';
import ReactPlayer from'react-player'

function VideoPlay(){
	return(
		<div>
			<ReactPlayer 
				width="480px" 
				height="240px" 
				controls 
				url='https://youtu.be/7sDY4m8KNLc?list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM' 
				onReady={() => console.log('onReady callback')}
				onStart={() => console.log('onStart callback')}
				onPause={() => console.log('onPause callback')}
				onEnded={() => console.log('onEnded callback')}
				onError={() => console.log('onError callback')}
			/>
		</div>
	)
}
export default VideoPlay;