import React from "react";
import styled from "styled-components";

const Background = styled.a`
	height: 70px;
	min-width: 556px;
	margin: 10px 0;
	position: relative;
	overflow: hidden;
	border: 1px solid #333;
	background-image: url(${(props) => props.backgroundImage});
	background-size: 556px;
	background-repeat: no-repeat;
	background-position: 0px -10px;
`;

const Button = (props) => {
	return (
		<Background
			href={props.link}
			target={"_blank"}
			backgroundImage={props.background}
		/>
	);
};

export default Button;
