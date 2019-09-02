import React from 'react';
import propTypes from 'prop-types';
import HeaderProfile from '../components/Profile/HeaderProfile';
import ProfileImages from '../components/Profile/ProfileImages';
import useProfile from '../Hooks/useProfile';
import Base from '../layouts/Base';
import LoaderCenter from '../components/Utils/LoaderCenter'

const Profile = ({ username, user }) => {

    const { loading, data, starting, images, error } = useProfile(username)

    if (loading) {
        return (
            <LoaderCenter />
        )
    }

    return (
        <Base title={username} description='desc de profile'>
            <div className="container is-small">

                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <HeaderProfile profile={data} images={images} />
                    </div>
                </div>
                <hr />
                <div className="columns">
                    <div className="column">
                        <ProfileImages images={images} />
                    </div>
                </div>

            </div>
        </Base>
    );
}

Profile.propTypes = {
    username: propTypes.string
}

Profile.defaultProps = {
    username: ''
}

export default Profile;