import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

function SocialList() {
	const socialMap = [EmailIcon, FacebookIcon, InstagramIcon, TwitterIcon];

	return (
		<ul className='SocialList flex'>
			{socialMap.map((item, i) => (
				<li key={i} className="ml-3">
					<button>{React.createElement(item)}</button>
				</li>
			))}
		</ul>
	);
}

export default SocialList;
