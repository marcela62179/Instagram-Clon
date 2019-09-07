import React from 'react';

const ProfileInfo = ({ profile, images }) => {
	return (
		<div className="profileInfo">
			<span className="profileInfoUsername">@{profile.username}</span>
			<br />
			<span>
				<strong>{images.length}</strong> Publicaciones
				<strong className="has-padding-left-25">
					{' '}
					{profile.followers.length}
				</strong>{' '}
				Seguidores
				<strong className="has-padding-left-25">
					{' '}
					{profile.follows.length}
				</strong>{' '}
				Seguidos
			</span>
			<div className="profileBiography has-margin-top-25">
				{profile.biography}
			</div>
		</div>
	);
};

ProfileInfo.defaultProps = {
	images: []
};

export default ProfileInfo;
