import React from 'react';

const ProfileAvatar = ({ avatar }) => {
	if (!avatar) {
		avatar =
			'https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png';
	}

	return (
		<img
			src={avatar}
			alt=""
			className="profileAvatar has-margin-bottom-30"
		/>
	);
};

export default ProfileAvatar;
