import React,{forwardRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ColoredTooltip = () => {
	return <span style={{color:'red'}}>Colored Component</span>
}
const CustomChild = forwardRef((props,ref) => {
	return(
		<div ref={ref}>
			<div>
				First Line
			</div>
			<div>
				Second  Line
			</div>
		</div>
	)
})

function Tooltip(){
	return(
		<div>	
			<div style={{paddingBottom:'20px'}}>		
				<Tippy placement="left" arrow={false} delay={1000}content="Basic Tooltip">
					<button>Hover</button>
				</Tippy>
			</div>
			<div style={{paddingBottom:'20px'}}>		
				<Tippy placement="bottom-end" content={<span style={{color:'orange'}}> lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</span>}>
					<button aria-describedby="tippy-2">Hover</button>
				</Tippy>
			</div>
			<div style={{paddingBottom:'20px'}}>		
				<Tippy placement="right" content={<ColoredTooltip />}>
					<button aria-describedby="tippy-2">Hover</button>
				</Tippy>
			</div>
			<div style={{paddingBottom:'20px'}}>		
				<Tippy placement="bottom" content={<ColoredTooltip />}>
					<CustomChild />
				</Tippy>
			</div >
		</div>
	);
}

export default Tooltip;

