var { s3, fs } = require('./s3');

var params = {
   Bucket: 's3-bucket-sample-1',
   Key: 'json-data.json',
   Range: 'bytes=0-9' // get 10 item 
};

s3.getObject(params, (err, res) => {
   if (err) {
      console.error('Unable get data. Error: ' + JSON.stringify(err, null, 2));
   } else {
      fs.writeFileSync('data.json', JSON.stringify(res, null, 2));
      console.log('Get data succeeded.');
   }
});