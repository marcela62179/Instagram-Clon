import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/login/actions';

const AppMenu = () => {

    let dispatch = useDispatch()
    const login = useSelector(state => state.login)

    return (
        <nav className='navbar'>
            {login.success && (
                <button className='btn btn-danger ml-4' onClick={() => dispatch(logOut())}> Log out </button>
            )}
        </nav>
    );
}


export default AppMenu;
