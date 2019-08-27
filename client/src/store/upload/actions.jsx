import axios from 'axios';
import shortid from 'shortid';
import {API_URL} from '../../helpers/Api_url';
export const STARTING_UPLOAD = 'STARTING_UPLOAD';
export const SUCCESS_UPLOAD = 'SUCCESS_UPLOAD';
export const ERROR_UPLOAD = 'ERROR_UPLOAD';

export const startingUpload = () => {
    return {
        type: STARTING_UPLOAD
    };
};

export const successUpload = (payload) => {
    return {
        type: SUCCESS_UPLOAD,
        payload: payload
    };
};

export const errorUpload = (payload) => {
    return {
        type: ERROR_UPLOAD,
        payload: payload
    };
};

export const uploadFileThunk = (ref, folder) => {
    return async (dispatch, getState) => {

        let file = ref.current.files[0];

        let fileParts = file.name.split('.');
        let fileName = shortid.generate() + "_" + fileParts[0];
        let fileType = fileParts[1];
        dispatch(startingUpload());
        await axios.post(`${API_URL}/api/uploadavatar`, {
            fileName,
            fileType,
            folder
        }).then(async res => {
            let data = res.data.data.returnData;
            let signedRequest = data.signedRequest
            let url = data.url;
            let options = {
                headers: {
                    'Content-Type': fileType
                }
            };
            await axios.put(signedRequest, file, options)
                .then(res => {
                    dispatch(successUpload(url));
                }).catch(err => {
                    dispatch(errorUpload(err))
                })
        }).catch(err => {
            dispatch(errorUpload(err))
        })
    }
}