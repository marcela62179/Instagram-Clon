import React from 'react';
import propTypes from 'prop-types';

const Profile = ({username}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <b>Hola desde profile {username}</b>
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