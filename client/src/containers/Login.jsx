import React, { useState } from 'react';
import Base from '../layouts/Base';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {

    let [activeForm, setActiveForm] = useState('Login')

    return (
        <Base title='Login' description=''>
            <div className="container height100 authContainer">
                <div className="columns height100">
                    <div className="column is-6 height100 centerAll d-flex flex-column">
                        <div className="authForm">
                            <div className='text-uppercase mb-4 authFormMenu'>
                                <span className='loginRegisterSelector' onClick={() => setActiveForm('Login')}>LOGIN</span>
                                <span className='loginRegisterSelector' onClick={() => setActiveForm('Register')}>REGISTER</span>
                            </div>

                            {activeForm === 'Login' && <LoginForm />}
                            {activeForm === 'Register' && <LoginForm />}
                        </div>
                    </div>
                    <div className="column is-6 height100">

                    </div>
                </div>
            </div>
        </Base>
    );
}

export default Login;