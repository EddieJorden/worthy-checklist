import React, {useState} from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import AddToList from "./AddToList"
import img from '../images/ioslakewallpaper.jpg'

const StyledBackground = styled.div`
	background-image: url(${img});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	height: 100%;
	width: 100%;
`
const StyledChecklistContainer = styled.div`
	display: Flex;
	height: 500px:
	width: 800px;
`

const StyledMessage = styled.div`
	font-size: 30px;
	color: red;
`

const Checklist = () => {
	const [list, setList] = useState(["Do you drive manual?", "Do you lift?", "Can you even code?", "Can you even heel kick bitches?"])
	const [checkedCount, setCheckedCount] = useState(0)
	const percentageClicked = Math.round(checkedCount /  list.length * 100)
	const isWorthy = percentageClicked > 69 ? true : false;
	return (
		<StyledBackground>
			<StyledChecklistContainer>
				<ul>
					{list.map((element, index) => <ListItem 
						listItemText={element}
						checkedCount={checkedCount}
						setCheckedCount={setCheckedCount}

						/>)}
				</ul>
			</StyledChecklistContainer>
			<div style={{color: "white", fontSize:"18px"}}>{`Checked: ${checkedCount}`}</div>
			{isWorthy && <StyledMessage>YOU ARE WORTHY</StyledMessage>}
			<AddToList list={list} setList={setList}/>
		</StyledBackground>
	)
}

export default Checklist;