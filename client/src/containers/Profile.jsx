import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { getProfileThunk } from '../store/profile/actions';
import HeaderProfile from '../components/Profile/HeaderProfile';

const Profile = ({ username }) => {


    const [loadProfile, setLoadProfile] = useState(true);

    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.data)

    useEffect(() => {
        async function getProfile() {
            dispatch(getProfileThunk(username))
            setLoadProfile(false)
        }
        getProfile()


    }, [])

    if (!profile) {
        return (
            <div>
                <h1>Este usuario no existe</h1>
            </div>
        )
    }


    if (loadProfile) {
        return (
            <></>
        )
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <HeaderProfile profile={profile}/>
                </div>
            </div>
        </div>
    );
}

Profile.propTypes = {
    username: propTypes.string
}

Profile.defaultProps = {
    username: ''
}

export default Profile;