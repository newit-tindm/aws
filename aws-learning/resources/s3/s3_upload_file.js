var AWS = require('aws-sdk');

var s3 = new AWS.S3({
   endpoint: 'http://localhost:4566',
   s3ForcePathStyle: true,
   accessKeyId: 'dev',
   secretAccessKey: 'dev'
});

const uploadFile = async (data, fileName) => {
   new Promise((resolve) => {
      s3.upload(
         {
            Bucket: 's3-bucket-sample-1',
            Key: fileName,
            Body: data,
         },
         (err, response) => {
            if (err) throw err
            resolve(response)
         },
      )
   });
};

module.exports = uploadFile