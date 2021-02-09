import React, {useState} from "react";
import styled from 'styled-components';

const Button = styled.div`
	width: 100px;
	height: 30px;
	border: 2px solid white;
	border-radius: 5px;
	cursor: pointer;
	
	text-align: center
`



const AddToList = ({list, setList}) => {

	const [value, setValue] = useState('')


	const handleClick = () => {
		setList([...list, value])
		setValue('')
	}
console.log(value)
	return (
	<div style={{display: 'flex'}}> 
		<input onSubmit={handleClick} style={{width: '400px'}} type="text" value={value} 
		
		onChange={(e) => {setValue(e.target.value)}}/>
		<Button onClick={handleClick}>add to list</Button>
		</div>
	
	)
}

export default AddToList;