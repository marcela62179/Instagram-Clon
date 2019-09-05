import React from 'react';
import propTypes from 'prop-types';
import ProfileAvatar from './ProfileAvatar';
import ProfileInfo from './ProfileInfo';
import axios from 'axios';
import { API_URL } from '../../helpers/Api_url';

const HeaderProfile = ({ profile, images, setReloadProfile }) => {

    const followProfile = async () => {
        await axios.put(`${API_URL}/api/user/follow/${profile._id}`)
            .then(res => {
                setReloadProfile(true)
            })

    }

    // const unFollowProfile = async () => {
    //     await axios.put(`${API_URL}/api/user/unfollow/${profile._id}`)
    //         .then(res => {
    //             setReloadProfile(true)
    //         })
    // }

    return (
        <div className="headerProfile has-margin-top-75">
            <ProfileAvatar avatar={profile.avatar} />
            <ProfileInfo profile={profile} images={images} />
            <button className='button is-success' onClick={() => followProfile()} > Seguir </button>
        </div>
    );
    
}

HeaderProfile.propTypes = {
    profile: propTypes.shape({
        avatar: propTypes.string,
        email: propTypes.string,
        registerAt: propTypes.string,
        username: propTypes.string,
        follows: propTypes.array,
        followers: propTypes.array,
        _id: propTypes.string
    })
}

HeaderProfile.defaultProps = {
    profile: {
        avatar: '',
        email: '',
        registerAt: '',
        username: '',
        follows: [],
        followers: [],
        _id: ''
    }
}

export default HeaderProfile;