require('dotenv').config()

const aws = require('aws-sdk');
const S3_BUCKET = process.env.bucket

aws.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey
})

export const Upload = async (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
    const folder = req.body.folder;

    const s3Params = {
        Bucket: S3_BUCKET + '/' + folder,
        Key: fileName,
        Expires: 500,
        ContentType: fileType,
        ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {

        if (err) {
            console.log(err);
            res.json({ success: false, error: err })
        }

        const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${folder}/${fileName}`
        };

        res.json({ success: true, data: { returnData } });

    });
}