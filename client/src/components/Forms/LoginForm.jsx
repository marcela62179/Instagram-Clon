import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "store/login/actions";
import ErrorMessage from "components/Utils/ErrorMessage";

const LoginForm = () => {
	let dispatch = useDispatch();

	let login = useSelector(state => state.login);

	let loginSubmit = e => {
		e.preventDefault();
		dispatch(loginThunk());
	};

	return (
		<form onSubmit={e => loginSubmit(e)}>
			<h1 className="title has-text-centered has-text-weight-bold">
				Welcome Back
			</h1>
			<div className="field">
				<label className="label" htmlFor="Username">
					Username
				</label>
				<div className="control">
					<Field
						name="username"
						component="input"
						type="text"
						placeholder="Enter your username"
						className={`input is-shadowless ${login.error && "is-danger"}`}
						required
					/>
				</div>
			</div>
			<div className="field">
				<label className="label" htmlFor="Password">
					Password
				</label>
				<div className="control">
					<Field
						name="password"
						component="input"
						type="password"
						placeholder="Enter your password"
						className={`input is-shadowless ${login.error && "is-danger"}`}
						required
					/>
				</div>
			</div>

			<div className="field">
				<p className="control">
					<a className="has-text-left" href="/">
						Forgot your password ?
					</a>
				</p>
			</div>

			<div className="field">
				<p className="control">
					<button
						className={`button is-primary is-fullwidth btn-login ${login.starting &&
							"is-loading"}`}
					>
						{" "}
						Log In{" "}
					</button>
				</p>
			</div>

			{login.error && <ErrorMessage error={login.error} />}
		</form>
	);
};

export default reduxForm({
	form: "loginForm"
})(LoginForm);
