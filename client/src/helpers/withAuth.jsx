import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './Api_url';

const withAuth = Component => ({ ...props }) => {
	let [loadingUser, setLoadingUser] = useState(true);
	let [isValid, setIsValid] = useState(false);

	useEffect(() => {
		async function getUser() {
			try {
				let res = await axios.get(`${API_URL}/api/user/whois`);

				if (res.statusText === 'OK' && res.status === 200) {
					setIsValid(res.data.tokenIsValid);
					setLoadingUser(false);
					return true;
				}
			} catch (error) {
				console.log(error);
			}
		}
		getUser();
	}, []);

	if (loadingUser) {
		return <></>;
	}

	return isValid ? <Component {...props} /> : <Redirect to="/login" />;
};

export default withAuth;
