import React from 'react';
import propTypes from 'prop-types';
import ImageCard from './ImageCard';

const ProfileImages = ({ images }) => {
	return (
		<section className="imagesContainer">
			{images.length === 0 && (
				<div>
					<b>Este perfil aun no sube imagenes.</b>
				</div>
			)}

			{images.map(image => (
				<ImageCard image={image} key={image._id} />
			))}
		</section>
	);
};

ProfileImages.defaultProps = {
	images: []
};

ProfileImages.propTypes = {
	images: propTypes.array
};

export default ProfileImages;
