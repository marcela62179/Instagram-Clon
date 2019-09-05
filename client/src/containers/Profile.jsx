import React from 'react';
import propTypes from 'prop-types';
import HeaderProfile from '../components/Profile/HeaderProfile';
import ProfileImages from '../components/Profile/ProfileImages';
import useProfile from '../Hooks/useProfile';
import useUser from '../Hooks/useUser';
import Base from '../layouts/Base';
import Loader from '../components/Utils/Loader'
import UserNotExist from './UserNotExist';

const Profile = ({ username }) => {

    const { loading, data, images, setReloadProfile } = useProfile(username)

    const user = useUser()

    if ( loading ) {
        return (
            <Loader />
        )
    }

    if ( !data ) {
        return <UserNotExist />
    }

    if ( username !== data.username ) {
        return <></>
    }

    return (
        <Base title={username} description='desc de profile'>
            <div className="container">

                <div className="columns">
                    <div className="column is-10 is-offset-1">

                        <HeaderProfile 
                            profile={data} 
                            user={user.data} 
                            images={images} 
                            setReloadProfile={setReloadProfile}                    
                        />

                    </div>
                </div>

                <div className="columns">
                    <div className="column">

                    </div>
                </div>

                <div className="columns">
                    <div className="column is-8 is-offset-2">

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