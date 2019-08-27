import React from 'react';
import Base from '../layouts/Base';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {

    return (
        <Base title='Login' description=''>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <LoginForm />
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </Base>
    );
}
 
export default Login;