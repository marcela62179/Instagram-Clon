import axios from 'axios';
import shortid from 'shortid';
import {API_URL} from './Api_url';

export let uploadFilePro = async (ref, folder) => {
    let file = ref.current.files[0];

    let fileParts = file.name.split('.');
    let fileName = shortid.generate() + "_" + fileParts[0];
    let fileType = fileParts[1];
    //let typeAllowed = ['jpg', 'jpeg', 'png', 'gif'];
    
    try {
        let res = await axios.post(`${API_URL}/api/upload`, { fileName, fileType, folder })
        try {
            let data = res.data.data.returnData;
            let signedRequest = data.signedRequest
            let options = {
                headers: {
                    'Content-Type': fileType
                }
            };
            await axios.put(signedRequest, file, options)
            return await res.data.data.returnData;

        } catch (error) {
            return await { err: error }
        }
    } catch (error) {
        return await { err: error }
    }

}