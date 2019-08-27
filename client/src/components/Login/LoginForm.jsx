import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../store/login/actions';

const LoginForm = () => {

    let dispatch = useDispatch();

    let login = useSelector(state => state.login)

    let loginSubmit = (e) => {
        e.preventDefault()
        dispatch(loginThunk());
    }

    return (
        <form className='loginForm' onSubmit={(e) => loginSubmit(e)}>
            <div className="form-group">
                <label htmlFor="Username">Username</label>
                <Field
                    name='username'
                    component='input'
                    type='text'
                    placeholder='Username'
                    className='form-control'
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <Field
                    name='password'
                    component='input'
                    type='password'
                    placeholder='Password'
                    className='form-control'
                    required
                />
            </div>

            <button className='btn btn-info btn-block'> Log In </button>
            {login.error && (
                <div className="form-group">
                    <br/>
                    <small className='text-danger'>
                        {login.error}
                    </small>
                </div>
            )}
            
        </form>
    );
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm);