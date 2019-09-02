import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useUser from '../Hooks/useUser';
import { logOut } from '../store/login/actions';
import NewPostModal from './NewPost/NewPostModal';

const AppMenu = () => {

    let [newPostModalOpen, setNewPostModalOpen] = useState(false);

    const dispatch = useDispatch()
    const user = useUser()

    let menuLoged = () => {
        return (
            <nav className="navbar is-fixed-top is-dark" role='navigation' aria-label="main navigation">
                <div className="container">
                    <NewPostModal isOpen={newPostModalOpen} setIsOpen={setNewPostModalOpen} />
                    <div className="navbar-brand">
                        <Link to="/explore" className="navbar-item">
                            <h2 className='subtitle has-text-white'>Explore</h2>
                        </Link>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>

                    </div>

                    <div id='navMenu' className="navbar-menu" >
                        <div className="navbar-start"></div>

                        <div className='navbar-end'>
                            <Link className='navbar-item' onClick={() => setNewPostModalOpen(true)}>Nuevo</Link>
                            <Link className='navbar-item' to={`/explore`}>Explorar</Link>
                            <Link className='navbar-item' to={`/@${user.data.username}`}>Mi perfil</Link>

                            <div className="navbar-item">
                                <button className='button is-danger' onClick={() => dispatch(logOut())}> Log out </button>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    let menuUnLoged = () => {
        return (
            <nav className="navbar">

            </nav>
        )
    }

    return (
        user.isLoged ? (
            menuLoged()
        ) : (
                menuUnLoged()
            )
    );
}


export default AppMenu;
