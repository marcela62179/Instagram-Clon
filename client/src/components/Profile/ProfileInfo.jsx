import React from 'react';

const ProfileInfo = ({username}) => {
    return (
        <div className="profileInfo">
            <span className='profileInfoUsername'>{username}</span>
        </div>
    );
}
 
export default ProfileInfo;