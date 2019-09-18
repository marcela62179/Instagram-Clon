import React from "react";
const ImageDestacada = ({ image }) => {
	const { url } = image;
	return (
		<>
			<div className="imageDestacadaInfo">
				<b className="imageLocation">Puerto Montt</b>

				<small className="imageDate">SEPTEMBER 14 2019</small>
			</div>
			<div className="imageDestacada">
				<img src={url} alt="" />
				<div className="imageDestacadaComments">
					{/* Simulacion de comentarios */}
					<div className="comments">
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
						<div className="comment">
							<b>Username</b>
							<p>Excelente imagen</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageDestacada;
