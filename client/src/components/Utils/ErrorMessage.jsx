import React from "react";

const ErrorMessage = ({ error }) => {
	return <b className="has-text-danger">{error.message && error.message}</b>;
};

export default ErrorMessage;
