import React from "react";
import { Button } from "../components";
import { Tweet } from "react-twitter-widgets";

const Content = (props) => {
	return (
		<>
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
			<div className={"flex flex-row w-5/6 justify-center self-center"}>
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
		</>
	);
};

export default Content;
