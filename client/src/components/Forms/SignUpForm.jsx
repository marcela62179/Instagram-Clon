import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {useDispatch, useSelector} from 'react-redux';
import {signUpThunk} from '../../store/signup/actions';

const SignUpForm = () => {

    let dispatch = useDispatch();

    let signUp = useSelector(state => state.signup)

    let signUpSubmit = (e) => {
        e.preventDefault()
        dispatch(signUpThunk());
    }

    console.log(signUp)

    return (
        <form onSubmit={(e) => signUpSubmit(e)}>
            <h1 className='title has-text-centered has-text-weight-bold'>Registro</h1>
            <div className="field">
                <label className='label' htmlFor="Username">Username</label>
                <div className="control">
                    <Field
                        name='username'
                        component='input'
                        type='text'
                        placeholder='Enter your username'
                        className={`input is-shadowless ${signUp.error && 'is-danger' }`}
                        required
                    />
                </div>
            </div>

            <div className="field">
                <label className='label' htmlFor="Email">Email</label>
                <div className="control">
                    <Field
                        name='email'
                        component='input'
                        type='text'
                        placeholder='Enter your email'
                        className={`input is-shadowless ${signUp.error && 'is-danger' }`}
                        required
                    />
                </div>
            </div>

            <div className="field">
                <label className='label' htmlFor="Password">Password</label>
                <div className="control">
                    <Field
                        name='password'
                        component='input'
                        type='password'
                        placeholder='Enter your password'
                        className={`input is-shadowless ${signUp.error && 'is-danger' }`}
                        required
                    />
                </div>
            </div>

            <div className="field">
                <p className="control">
                    <button className={`button is-primary is-fullwidth btn-login ${signUp.starting && 'is-loading'}`}> Sign Up </button>
                </p>
            </div>
            

            {signUp.error && (
                <div className="field">
                    <div className="control">
                        <small className='has-text-danger'>
                            {signUp.error}
                        </small>
                    </div>
                </div>
            )}

        </form>
    );
}
 
export default reduxForm({
    form: 'signupForm'
})(SignUpForm);