import React from 'react';
import styled from 'styled-components';

const Notion = styled.button`
	height: 70px;
	width: 700px;
	margin: 10px 0;
	position: relative;
	overflow: hidden;
	border: 1px solid #333; 
	background-image: url(${props => props.backgroundImage});
	background-size: 250px;
	background-repeat:no-repeat;
	background-position: -20px -15px;

`

const Text = styled.p`
	margin: 0;
	padding: 0;
	color: white;
	font-size: 45px;
`

const NotionButton = (props) => {
	console.log(props)
	return (
		<Notion backgroundImage={props.background}>
			<div className={"flex flex-row justify-between px-10 pb-4"}>
				
			</div>
		</Notion>
	)
}

export default NotionButton;