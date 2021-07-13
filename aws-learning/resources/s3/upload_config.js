var { s3 } = require('./s3')

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