import shortid from 'shortid'
import axios from 'axios';

let uploadFileS3 = async (e, ref) => {
    setSuccess(false)
    e.preventDefault();

    let file = ref.current.files[0];

    let fileParts = uploadInput.current.files[0].name.split('.');
    let fileName = shortid.generate() + "_" + fileParts[0];
    let fileType = fileParts[1];

    await axios.post("http://localhost:5000/api/uploadavatar", {
        fileName,
        fileType
    }).then(async res => {
        let data = res.data.data.returnData;
        let signedRequest = data.signedRequest
        setUrl(data.url)
        let options = {
            headers: {
                'Content-Type': fileType
            }
        };
        await axios.put(signedRequest, file, options)
        .then(res => {
            console.log('archivo subido correctamente')
            setSuccess(true)
        }).catch(err => {
            console.log('error al put archivo ', err)
        })
    })

}

export default uploadFileS3