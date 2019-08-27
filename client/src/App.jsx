import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './helpers/history';
import withAuth from './helpers/withAuth';
import Index from './containers/Index';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Profile from './containers/Profile';
import AppMenu from './components/AppMenu';
import { initAxiosInterceptors} from './helpers/auth-helpers';

initAxiosInterceptors();

function App() {

    return (
        <Router history={history}>
            <AppMenu />
            <Switch>
                <Route exact path='/' component={withAuth(Index)}/> 
                <Route exact path='/@:username' render={(props) => {
                    let username = props.match.params.username
                    return( <Profile username={username} /> )
                }}/>
                <Route path='/dashboard' component={withAuth(Dashboard)}/>
                <Route path='/login' component={Login}/> 
            </Switch>
        </Router>
    );
}

export default App;
