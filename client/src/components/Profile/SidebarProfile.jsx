import React from "react";

const SidebarProfile = ({ profileData }) => {
	const { avatar, username, biography, followers, follows } = profileData;
	return (
		<aside className="sidebarProfile">
			<main className="sidebarInfo">
				<section className="sidebarAvatar">
					<img src={avatar} />
				</section>

				<section className="sidebarUsername">
					<b>{username}</b>
				</section>
				<section className="sidebarBiography">
					<span>
						{biography ? biography : "Este es un ejemplo de una biografia"}
					</span>
				</section>

				<section className="sidebarFollowButton">
					<button className="button is-primary is-rounded"> Follow </button>
				</section>

				<section className="sidebarOtherInfo">
					<span>
						<i className="has-text-grey"> Followers </i>
						<p> {followers.length} </p>
					</span>
					<span>
						<i className="has-text-grey"> Following </i>
						<p> {follows.length} </p>
					</span>
				</section>
			</main>
		</aside>
	);
};

export default SidebarProfile;
