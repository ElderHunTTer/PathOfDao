import Head from "next/head";
import axios from "axios";
import { Content, Footer, Nav } from "../components";
import styled from "styled-components";

const StyledDiv = styled.div`
	z-index: 2;
	background-image: url(${(props) => props.background});
	background-size: 100vw;
	background-repeat: no-repeat;
	background-position: 0px -100px;
	min-height: 100vh;
`;

const YinYang = styled.div`
	z-index: 0;
	position: absolute;
	top: 10px;
	display: flex;
	align-self: center;
	background-image: url(${(props) => props.background});
	background-size: 150px;
	background-repeat: no-repeat;
	background-position: 0px 10px;
	min-height: 200px;
`;

const SpacedBox = styled.div`
	height: 350px;
`;

const bearerToken =
	"AAAAAAAAAAAAAAAAAAAAAI5oWwEAAAAAHNgKficRsJegOJicc70TjUcHmfw%3DO6EHyBLKNsCoTwSh2gu3b6xq2s67pyAWtKb3nS9wBtIpeOmz6E";
let axiosConfig = {
	headers: {
		Authorization: "Bearer " + bearerToken
	}
};

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Path Of Dao</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<StyledDiv
				background={"background_parallax.png"}
				className="flex flex-col items-center justify-center"
				style={{ backgroundColor: "#f6f6f6" }}
			>
				<YinYang background={"yinyang.png"} />
				<Nav />
				<SpacedBox />
				<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
					<Content {...props} />
				</main>
				<Footer />
			</StyledDiv>
		</>
	);
}
export async function getServerSideProps() {
	try {
		const users = await axios.get(
			"https://api.twitter.com/2/users/by?usernames=PathOfDao&user.fields=created_at&expansions=pinned_tweet_id&tweet.fields=author_id,created_at",
			axiosConfig
		);
		const tweets = await axios.get(
			`https://api.twitter.com/2/users/${users.data.data[0].id}/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=5`,
			axiosConfig
		);
		return {
			props: { tweets: tweets.data, userID: users.data.data[0].id }
		};
	} catch (e) {
		console.log(e.message);
	}
}
