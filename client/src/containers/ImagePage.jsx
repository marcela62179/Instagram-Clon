import React from 'react';
import Base from '../layouts/Base';
import useSingleImage from '../Hooks/useSingleImage';
import Loader from '../components/Utils/Loader';
import ErrorMessage from '../components/Utils/ErrorMessage';

const ImagePage = ({ imageid }) => {
	const { starting, data, error } = useSingleImage(imageid);

	if (data) {
		if (!error && data._id !== imageid) {
			return <Loader />;
		}
	}

	if (starting) {
		return <Loader />;
	}
	console.log(data);
	return (
		<Base title="as" description="ds">
			<div className="container">
				{data && (
					<div className="columns">
						<div className="column is-8">
							<img src={data.url} alt="" />
						</div>

						<div className="column is-4"></div>
					</div>
				)}
				{error && <ErrorMessage error={error} />}
			</div>
		</Base>
	);
};

export default ImagePage;
