import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
	display: flex;
	flex-direction: row;
	position: sticky;
	top: 0;
	justify-content: space-evenly;
	padding: 10px 25px;
	background-color: #f6f6f6;
	min-width: 100vw;
`;

const Nav = () => {
	return (
		<StyledNav>
			<div>Home</div>
			<div>Stuff</div>
			<div>Stuff</div>
			<div>
				<image href={""} />
			</div>
			<div>Wallet Info</div>
		</StyledNav>
	);
};

export default Nav;
