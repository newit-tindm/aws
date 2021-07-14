var { s3, DEFAULT_BUCKET_NAME } = require('./s3')

const uploadFile = async (data, fileName) => {
   new Promise((resolve) => {
      s3.upload(
         {
            Bucket: DEFAULT_BUCKET_NAME,
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