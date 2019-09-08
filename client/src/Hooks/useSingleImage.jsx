import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImageThunk } from '../store/Image/actions';

function useSingleImage(imageId) {
	const [reload, setReload] = useState(false);

	const image = useSelector(state => state.image);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!image.data || image.data._id !== imageId) {
			dispatch(getImageThunk(imageId));
		}
	}, []);

	useEffect(() => {
		if (reload) {
			if (image) {
				dispatch(getImageThunk(imageId));
				setReload(false);
			}
		}
	}, [reload]);

	const payload = {
		starting: image.starting,
		data: image.data,
		error: image.error,
		setReloadImage: setReload
	};

	return payload;
}

export default useSingleImage;
