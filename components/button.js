import React from "react";
import styled from "styled-components";

const Background = styled.button`
	height: 100px;
	min-width: 700px;
	margin: 10px 0;
	position: relative;
	overflow: hidden;
	border: 1px solid #333;
	background-image: url(${(props) => props.backgroundImage});
	background-size: 700px;
	background-repeat: no-repeat;
	background-position: 0px -10px;
`;

const Button = (props) => {
	return <Background backgroundImage={props.background} />;
};

export default Button;