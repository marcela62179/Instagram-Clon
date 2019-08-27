import React from 'react';
import ReactSVG from 'react-svg'
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/login/actions';

// Icons
import MenuCollapseIcon from '../../assets/icons/menucollapse.svg'

const Navbar = (props) => {

    const { closeSidebar } = props

    let dispatch = useDispatch();

    return (
        <nav className='navbar'>
            <ReactSVG src={MenuCollapseIcon} onClick={() => closeSidebar()} />
            <button className='btn btn-danger ml-4' onClick={() => dispatch(logOut())}> Log out </button>
        </nav>
    );
}

export default Navbar;
