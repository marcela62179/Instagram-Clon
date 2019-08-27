import React, { useRef } from 'react';
import { uploadFileThunk } from '../../../store/upload/actions';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {

    const uploadInput = useRef();
    const dispatch = useDispatch();

    const upload = useSelector(state => state.upload)
    console.log(upload)
    return (
        <div className="row">
            <div className="form-group">
                <input ref={uploadInput} type="file" className='form-control' />
            </div>
            <div className="form-group">
                <button className='btn btn-success' onClick={() => dispatch(uploadFileThunk(uploadInput, 'images'))}> Upload File </button>
            </div>
            
            <div className="form-group"> 

                {upload.starting && (
                    <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )}

                {upload.success && (
                    <span>
                        <p>File: <a href={upload.url} target='_blank' rel="noopener noreferrer"> {upload.url} </a></p>
                    </span>
                )}

            </div>
        </div>
    );
}

export default Users;