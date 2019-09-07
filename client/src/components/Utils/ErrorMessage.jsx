import React from 'react';

const ErrorMessage = ({ error }) => {
	console.log(error);
	return <b className="has-text-danger">{error.message}</b>;
};

export default ErrorMessage;
