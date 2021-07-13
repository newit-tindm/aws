var { s3, fs } = require('./s3');

var path = require('path');

const file = 'json-data.json';

const fileStream = fs.createReadStream(file);

s3.upload(
   {
      Bucket: 's3-bucket-sample-1',
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