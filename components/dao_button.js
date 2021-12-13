import React from 'react';
import styled from 'styled-components';

const Dao = styled.button`
	height: 70px;
	width: 700px;
    background-color: #333;
	margin: 10px 0;
	border: 1px solid #333; 
`

const Text = styled.p`
	margin: 0;
	padding: 0;
	color: white;
	font-size: 45px;
`

const DaoButton = (props) => {
	return (
		<Dao backgroundImage={props.background}>
			<div className={"px-10 pb-4"}>
				<Text>THE HEAVENLY DAO</Text>
			</div>
		</Dao>
	)
}

export default DaoButton;