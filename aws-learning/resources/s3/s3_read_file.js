var AWS = require('aws-sdk');

var fs = require('fs');

var s3 = new AWS.S3({
   endpoint: 'http://localhost:4566',
   s3ForcePathStyle: true,
   accessKeyId: 'dev',
   secretAccessKey: 'dev'
});

var params = {
   Bucket: 's3-bucket-sample-1',
   Key: 'json-data.json',
};

s3.getObject(params, (err, res) => {
   if (err) {
      console.error('Unable get data. Error: ' + JSON.stringify(err, null, 2));
   } else {
      var data = JSON.stringify(res, null, 2);
      fs.writeFileSync('json_data_s3.json', data);
      console.log('Get data succeeded.');
   }
});