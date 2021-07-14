var { s3, DEFAULT_BUCKET_NAME } = require('./s3');

var params = {
    Bucket: DEFAULT_BUCKET_NAME,
    Key: 'test-image.png'
};

s3.putObject(params, function (err, data) {
    if (err) {
        console.error('Unable put file. Error: ', JSON.stringify(err, null, 2));
    } else {
        console.log('Put file succeeded.');
        console.log(data);
    }
});

// get file - http://localhost:4566/s3-bucket-sample-1/test-image.png