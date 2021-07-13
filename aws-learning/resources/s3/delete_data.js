var { s3 } = require('./s3');

var params = {
   Bucket: 's3-bucket-sample-1',
   Key: 'test-image.png'
};

s3.deleteObject(params, (err, res) => {
   if (err) {
      console.error('Unable delete data. Error: ' + JSON.stringify(err, null, 2));
   } else {
      console.log('Delete data succeeded.');
      console.log(res);
   }
});