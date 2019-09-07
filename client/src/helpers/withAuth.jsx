import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './Api_url';

const withAuth = Component => ({ ...props }) => {
	let [user, setUser] = useState(undefined);
	let [loadingUser, setLoadingUser] = useState(true);
	let [isValid, setIsValid] = useState(false);

	useEffect(() => {
		async function getUser() {
			await axios
				.get(`${API_URL}/api/user/whois`)
				.then(res => {
					setIsValid(res.data.tokenIsValid);
					setTimeout(() => {
						setLoadingUser(false);
					}, 10);
				})
				.catch(err => {
					console.log(err);
				});
		}
		getUser();
	}, []);

	if (loadingUser) {
		return <></>;
	}

	return isValid ? <Component {...props} /> : <Redirect to="/login" />;
};

export default withAuth;
