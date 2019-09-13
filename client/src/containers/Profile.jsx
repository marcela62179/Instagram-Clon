import React, { useEffect } from "react";
import propTypes from "prop-types";
import useProfile from "../Hooks/useProfile";
import useUser from "../Hooks/useUser";
import Base from "../layouts/Base";
import Loader from "../components/Utils/Loader";
import ProfileImages from "../components/Profile/ProfileImages";
import SidebarProfile from "../components/Profile/SidebarProfile";

const Profile = ({ username }) => {
	const { loading, data, images } = useProfile(username);
	const logedUserData = useUser();
	if (loading) {
		return <Loader />;
	}

	if (Object.keys(data).length === 0) {
		return (
			<div className="centerAll height100">
				<h1 className="title"> Este perfil no existe </h1>
			</div>
		);
	}

	return (
		<Base title={username} description="desc de profile">
			<SidebarProfile profileData={data} />
			<div className="container sidebarMargin">
				<ProfileImages
					images={images}
					username={username}
					userLoged={logedUserData.data}
				/>
			</div>
		</Base>
	);
};

Profile.propTypes = {
	username: propTypes.string
};

Profile.defaultProps = {
	username: ""
};

export default Profile;
