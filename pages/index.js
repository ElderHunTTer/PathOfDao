import Head from "next/head";
import TweetEmbed from "react-tweet-embed";
import axios from "axios";
import Button from "../components/button";

const bearerToken =
	"AAAAAAAAAAAAAAAAAAAAAI5oWwEAAAAAHNgKficRsJegOJicc70TjUcHmfw%3DO6EHyBLKNsCoTwSh2gu3b6xq2s67pyAWtKb3nS9wBtIpeOmz6E";
let axiosConfig = {
	headers: {
		Authorization: "Bearer " + bearerToken
	}
};

export default function Home(props) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Head>
				<title>Path Of Dao</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav className={"flex flex-row justify-evenly px-2 w-full"}>
				<div>Home</div>
				<div>Stuff</div>
				<div>Stuff</div>
				<div>
					<image href={""} />
				</div>
				<div>Wallet Info</div>
			</nav>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<Button />
				<Button background={"DISCORD.jpg"} />
				<Button background={"NOTION.jpg"} />
				<Button background={"GITCOIN.jpg"} />
			</main>
			<div className={"flex flex-col w-full justify-center"}>
				{props.tweets.data
					.filter((x) => !x.text.includes("RT"))
					.map((tweet) => (
						<div className={"self-center"}>
							<TweetEmbed placeholder={"loading"} id={tweet.id} />
						</div>
					))}
			</div>

			<footer className="flex items-center justify-center w-full h-24 border-t">
				<a
					className="flex items-center justify-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<img
						src="/vercel.svg"
						alt="Vercel Logo"
						className="h-4 ml-2"
					/>
				</a>
			</footer>
		</div>
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
