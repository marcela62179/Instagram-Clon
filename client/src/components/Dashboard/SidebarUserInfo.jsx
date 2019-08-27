import React from 'react';
import AvatarPlaceholder from '../../assets/images/avatar.png'

const SidebarUserInfo = (props) => {
    //const { avatar, username, id } = props
    return (
        <li className='sidebarItems-userloged'>
            <div className="avatar">
                <img src={AvatarPlaceholder} alt="" />
            </div>
            <span>Administrator</span>
        </li>
    );
}

export default SidebarUserInfo;