import React from 'react';

const ProfileInfo = ({username, images}) => {

    return (
        <div className="profileInfo">
            <span className='profileInfoUsername'>{username}</span><br/>
            <span> Publicaciones {images.length}</span>
        </div>
    );
}
 
export default ProfileInfo;