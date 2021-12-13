import Head from "next/head";
import TweetEmbed from "react-tweet-embed";
import { Tweet, Timeline } from "react-twitter-widgets";
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
				<Button link={"#"} background={"DAO.jpg"} />
				<Button
					link={"https://discord.com/invite/3MPb6Xuhec"}
					background={"DISCORD.jpg"}
				/>
				<Button
					link={
						"https://www.notion.so/Public-Proposal-a7c74b3533234f9596194ce14c890cdc"
					}
					background={"NOTION.jpg"}
				/>
				<Button
					link={"https://gitcoin.co/grants/3570/pathofdao"}
					background={"GITCOIN.jpg"}
				/>
				<Button
					link={"https://github.com/ElderHunTTer/PathOfDao"}
					background={"GITHUB.jpg"}
				/>
				<div
					className={"flex flex-row w-5/6 justify-center self-center"}
				>
					{props.tweets.data
						.filter((x) => !x.text.includes("RT"))
						.map((tweet) => (
							<div key={tweet.id} className={"self-center"}>
								<Tweet
									tweetId={tweet.id}
									options={{
										width: 300
									}}
								/>
							</div>
						))}
				</div>
			</main>

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
