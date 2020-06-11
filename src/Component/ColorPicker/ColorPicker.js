import React,{useState} from 'react';
import {SketchPicker} from 'react-color';

function ColorPicker(){
	const[color,setColor] = useState('#fff');
	const [showColorPicker,setShowColorPicker] = useState(false);

	return(
		<div>
		    <button 
		      onClick={() => setShowColorPicker(showColorPicker=> !showColorPicker)}>
		      {showColorPicker ? 'Close color picker':'Pick a color'}
		     </button>
		     {showColorPicker && (
                <SketchPicker 
					color={color} 
					onChange={updateColor => setColor(updateColor.hex)}
				/> 
		     )}
			
			<h2>You picked {color}</h2>

		</div>		
	)
}

export default ColorPicker;