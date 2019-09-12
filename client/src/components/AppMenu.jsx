import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import useUser from "../Hooks/useUser";
import { logOut } from "../store/login/actions";
import NewPostModal from "./NewPost/NewPostModal";
import ReactSVG from "react-svg";

// Icons
import ExploreIcon from "../assets/icons/explore.svg";
import ProfileIcon from "../assets/icons/profile.svg";
import UploadIcon from "../assets/icons/upload.svg";

const AppMenu = () => {
	let [isOpen, setIsOpen] = useState(false);

	const dispatch = useDispatch();
	const { data, loading, isLoged } = useUser();

	if (loading) {
		return <></>;
	}

	if (!data) {
		return <></>;
	}

	let menuLoged = () => {
		return (
			<nav
				className="navbar is-fixed-top is-light"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="container">
					<NewPostModal isOpen={isOpen} setIsOpen={setIsOpen} />
					<div className="navbar-brand">
						<NavLink to="/explore" className="navbar-item">
							<h2 className="subtitle">Explore</h2>
						</NavLink>

						<a
							role="button"
							className="navbar-burger burger"
							aria-label="menu"
							aria-expanded="false"
							data-target="navMenu"
						>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>

					<div id="navMenu" className="navbar-menu">
						<div className="navbar-start"></div>

						<div className="navbar-end">
							<a className="navbar-item" onClick={() => setIsOpen(true)}>
								<ReactSVG className="icon" src={UploadIcon} />
							</a>

							<NavLink
								activeClassName="activeClassNavLink"
								className="navbar-item"
								to={`/explore`}
							>
								<ReactSVG className="icon" src={ExploreIcon} />
							</NavLink>

							<NavLink
								activeClassName="activeClassNavLink"
								className="navbar-item"
								to={`/@${data.username}`}
							>
								<ReactSVG className="icon" src={ProfileIcon} />
							</NavLink>

							<div className="navbar-item">
								<button
									className="button is-danger"
									onClick={() => dispatch(logOut())}
								>
									{" "}
									Log out{" "}
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	};

	let menuUnLoged = () => {
		return <nav className="navbar"></nav>;
	};

	return isLoged ? menuLoged() : menuUnLoged();
};

export default AppMenu;
