import React, { useState } from 'react';
import Base from '../layouts/Base';
import LoginForm from '../components/Forms/LoginForm';
import SignUpForm from '../components/Forms/SignUpForm';

const Login = () => {
	let [activeForm, setActiveForm] = useState('Login');

	return (
		<Base title="Login" description="">
			<div className="container is-fluid height100 authContainer is-marginless">
				<div className="columns height100 is-marginless">
					<div className="column is-6 height100 centerAll">
						<div className="authForm">
							<div className="text-uppercase mb-4 authFormMenu">
								<span
									className="loginRegisterSelector"
									onClick={() => setActiveForm('Login')}
								>
									LOGIN
								</span>
								<span
									className="loginRegisterSelector"
									onClick={() => setActiveForm('Register')}
								>
									REGISTER
								</span>
							</div>

							{activeForm === 'Login' && <LoginForm />}
							{activeForm === 'Register' && <SignUpForm />}
						</div>
					</div>
					<div className="column is-6 height100"></div>
				</div>
			</div>
		</Base>
	);
};

export default Login;
