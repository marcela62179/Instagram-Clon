import React from 'react';
import NewPostForm from './NewPostForm';

const NewPostModal = ({ isOpen, setIsOpen }) => {

    return (
        <div className={`modal ${isOpen && 'is-active'}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <div className="modal-card-head">
                    <div className="modal-card-title is-pulled-left"> 
                        Nueva publicacion 
                    </div>
                    <button className='button is-danger is-pulled-right' onClick={() => setIsOpen(false)}> x </button>
                </div>
                <div className="modal-card-body">
                    <NewPostForm setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>
    );
}

export default NewPostModal;