import React from 'react';
// import CountUp,{ useCountUp } from 'react-countup';

function Coutte(){
	const {countUp,start,pauseResume,reset,update } = useCountUp({duration:5,end:10000,startOnMount:false})
	return(
		<div>
            <div>
            	<h1>{countUp}</h1>
            	<button onClick={start}>Start</button>
            	<button onClick={reset}>Reset</button>
            	<button onClick={pauseResume}>Pase/Resume</button>
            	<button onClick={() => update(2000)}>Update to 2000</button>
            </div>
			<h1>
			 	<CountUp end={300}/>
			 </h1>
			 <h1>
			 	<CountUp end={300} duration={5} />
			 </h1>
			 <h1>
				 <CountUp start={400} end={1000} duration={15} />
			 </h1>
			 <h1>
				 <CountUp start={0} end={1000} duration={10}  prefix='$' decimals={2} />
			 </h1>
			 <h1>
				 <CountUp start={0} end={1000} duration={12}  suffix='USD' decimals={2} />
			 </h1>
		</div>
	)
}

export default Coutte;