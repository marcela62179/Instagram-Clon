import React from "react";
import propTypes from "prop-types";
import ImageCard from "components/Profile/ImageCard";
import ImageDestacada from "components/Profile/ImageDestacada";

const ProfileImages = ({ images, userLoged, username }) => {
	const imagenDestacada = images.filter(image => image.destacada === true)[0];
	return (
		<>
			<div className="columns">
				<div className="column is-11 is-offset-1">
					{imagenDestacada && <ImageDestacada image={imagenDestacada} />}
					{!imagenDestacada && username === userLoged.username && (
						<>
							<b>Sabias que puedes destacar una imagen ?</b>
							<br />
							<small> este mensaje solo lo ves tu.</small>
						</>
					)}
				</div>
			</div>

			<div className="columns">
				<div className="column is-11 is-offset-1">
					<div className="imagesContainer">
						{images.map(
							image =>
								!image.destacada && <ImageCard image={image} key={image._id} />
						)}
					</div>
				</div>
			</div>
		</>
	);
};

ProfileImages.defaultProps = {
	images: []
};

ProfileImages.propTypes = {
	images: propTypes.array
};

export default ProfileImages;
