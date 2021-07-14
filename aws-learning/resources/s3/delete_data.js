var { s3, DEFAULT_BUCKET_NAME } = require('./s3');

var params = {
   Bucket: DEFAULT_BUCKET_NAME,
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