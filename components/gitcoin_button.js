import React from "react";
import styled from "styled-components";

const GitCoin = styled.button`
	height: 70px;
	width: 700px;
	margin: 10px 0;
	position: relative;
	overflow: hidden;
	border: 1px solid #333;
	background-image: url(${(props) => props.backgroundImage});
	background-size: 700px;
	background-repeat: no-repeat;
	background-position: 0px -155px;
`;

const Text = styled.p`
	margin: 0;
	padding: 0;
	color: white;
	font-size: 50px;
`;

const GitCoinButton = (props) => {
	return (
		<GitCoin backgroundImage={props.background}>
			<div className={"flex flex-row justify-between px-10 pb-4"}>
				<Text>GITCOIN</Text>
				<Text>GRANT</Text>
			</div>
		</GitCoin>
	);
};

export default GitCoinButton;
