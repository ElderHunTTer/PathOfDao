import React from 'react';
import styled from 'styled-components';

const Discord = styled.button`
	height: 70px;
	width: 700px;
	margin: 10px 0;
	background-color: #7289da;
	border: 1px solid #333; 
	background-image: url(${props => props.backgroundImage});
	background-size: 280px;
	background-repeat:no-repeat;
	background-position: 420px -10px;

`

const Text = styled.p`
	margin: 0;
	padding: 0;
	color: white;
	font-size: 45px;
`

const DiscordButton = (props) => {
	return (
		<Discord backgroundImage={props.background}>
			<div className={"flex flex-row justify-between px-10 pb-4"}>
				<Text>DISCORD</Text>
			</div>
		</Discord>
	)
}

export default DiscordButton;