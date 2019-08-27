import React from 'react';
import ReactSVG from 'react-svg';
import {NavLink} from 'react-router-dom';

const SidebarItem = (props) => {
    const {icon, to, title} = props
    return (
        <NavLink exact activeClassName='sidebarSelected' to={to}>
            <li>
                <ReactSVG src={icon}/>
                {title}
            </li>
        </NavLink>
    );
}
 
export default SidebarItem;