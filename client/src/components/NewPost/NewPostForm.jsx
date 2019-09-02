import React, { useRef, useState } from 'react';
import { uploadFilePro } from '../../helpers/uploadFile';
import Axios from 'axios';
import { history } from '../../helpers/history';
import { API_URL } from '../../helpers/Api_url';

const NewPostForm = ({ setIsOpen }) => {

    let uploadInput = useRef();
    let [error, setError] = useState(null)

    let uploadNewPost = async (e) => {
        e.preventDefault();
        await uploadFilePro(uploadInput, 'images')
            .then(async res => {
                console.log(res)
                await Axios.post(`${API_URL}/api/image`, { url: res.url })
                    .then(res => {
                        history.push(`/p/${res.data._id}`)
                        setIsOpen(false)
                    })
            })
    }

    return (

        <form onSubmit={(e) => uploadNewPost(e)} className='is-center is-centered'>
            <div className="field">
                <div className="file has-name is-boxed">
                    <label className="file-label">
                        <input ref={uploadInput} className="file-input" type="file" name="resume" />
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">Choose a file…</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className='button is-success' > Publicar ! </button>
                    {error && (
                        <p className='has-text-centered has-text-danger'>
                            {error}
                        </p>
                    )}
                </div>
            </div>
        </form>

    );
}

export default NewPostForm