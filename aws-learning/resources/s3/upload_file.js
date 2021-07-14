var { s3, fs, DEFAULT_BUCKET_NAME } = require('./s3');

var path = require('path');

const file = 'json-data.json';

const fileStream = fs.createReadStream(file);

s3.upload(
   {
      Bucket: DEFAULT_BUCKET_NAME,
      Key: path.basename(file),
      Body: fileStream
   },
   (err, response) => {
      if (err) {
         console.error('Unable upload file. Error: ', JSON.stringify(err, null, 2));
      } else {
         console.log('Upload file succeeded.');
         console.log(response);
      }
   },
)