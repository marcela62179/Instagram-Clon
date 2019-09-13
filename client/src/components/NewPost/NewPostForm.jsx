import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { uploadFilePro } from "../../helpers/uploadFile";
import ReactSVG from "react-svg";
import UploadIcon from "../../assets/icons/upload.svg";
import { uploadImageThunk } from "../../store/uploadImage/actions";

const NewPostForm = ({ setIsOpen }) => {
	const uploadInput = useRef();
	const dispatch = useDispatch();

	const uploadNewPost = async e => {
		e.preventDefault();
		await uploadFilePro(uploadInput, "images").then(async res => {
			dispatch(uploadImageThunk(res.url));
			setTimeout(() => {
				setIsOpen(false);
			}, 50);
		});
	};

	return (
		<form onSubmit={e => uploadNewPost(e)} className="is-center is-centered">
			<div className="field">
				<div className="file has-name is-boxed">
					<label className="file-label">
						<input
							ref={uploadInput}
							className="file-input"
							type="file"
							name="resume"
						/>
						<span className="file-cta">
							<span className="file-icon">
								<ReactSVG className="icon" src={UploadIcon} />
							</span>
							<span className="file-label">Choose a file…</span>
						</span>
					</label>
				</div>
			</div>
			<div className="field">
				<div className="control">
					<button className="button is-success"> Publicar ! </button>
				</div>
			</div>
		</form>
	);
};

export default NewPostForm;
