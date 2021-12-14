import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
	z-index: 999;
	display: flex;
	flex-direction: row;
	position: sticky;
	top: 0;
	justify-content: space-evenly;
	padding: 10px 25px;
	/* Frosted glass affect */
	-webkit-backdrop-filter: blur(8px);
	backdrop-filter: blur(8px);
	/* Add box-shadow for more depth */
	box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.15);
	background-color: rgba(228, 228, 228, 0.1);
	min-width: 100vw;
`;

const Nav = () => {
	return (
		<StyledNav>
			<p>Home</p>
			<p>Stuff</p>
			<p>Stuff</p>
			<div>
				<image href={""} />
			</div>
			<p>Wallet Info</p>
		</StyledNav>
	);
};

export default Nav;
