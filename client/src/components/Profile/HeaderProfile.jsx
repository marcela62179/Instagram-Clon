import React from 'react';
import propTypes from 'prop-types';
import ProfileAvatar from './ProfileAvatar';
import ProfileInfo from './ProfileInfo';

const HeaderProfile = ({profile}) => {

    return (
        <div className="headerProfile">
            <ProfileAvatar avatar={profile.avatar}/>
            <ProfileInfo username={profile.username} />
        </div>
    );
}

HeaderProfile.propTypes = {
    profile: propTypes.shape({
        avatar: propTypes.string,
        email: propTypes.string,
        registerAt: propTypes.string,
        username: propTypes.string,
        _id: propTypes.string
    })
}

HeaderProfile.defaultProps = {
    profile: {
        avatar: '',
        email: '',
        registerAt: '',
        username: '',
        _id: ''
    }
}

export default HeaderProfile;