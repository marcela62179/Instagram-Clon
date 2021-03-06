import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "helpers/history";
import withAuth from "helpers/withAuth";
import Explore from "containers/Explore";
import Login from "containers/Login";
import ImagePage from "containers/ImagePage";
import Profile from "containers/Profile";
import AppMenu from "components/AppMenu";
import { initAxiosInterceptors } from "helpers/auth-helpers";

initAxiosInterceptors();

function App() {
	return (
		<Router history={history}>
			<AppMenu />
			<Switch>
				<Route
					exact
					path="/"
					render={() => <Redirect from="/" to="/explore" />}
				/>
				<Route path="/explore" component={withAuth(Explore)} />

				<Route
					exact
					path="/@:username"
					render={props => {
						const ProfileWithAuth = withAuth(Profile);
						const username = props.match.params.username;
						return <ProfileWithAuth username={username} />;
					}}
				/>

				<Route
					path="/p/:imageid"
					render={props => {
						const ImagePageWithAuth = withAuth(ImagePage);
						const imageid = props.match.params.imageid;
						return <ImagePageWithAuth imageid={imageid} />;
					}}
				/>

				<Route path="/login" component={Login} />
			</Switch>
		</Router>
	);
}

export default App;
