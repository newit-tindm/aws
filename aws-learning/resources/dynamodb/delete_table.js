var AWS = require('aws-sdk');

AWS.config.update({
    region: 'ap-northeast-1',
    endpoint: 'http://localhost:4569',
    accessKeyId: 'dev',
    secretAccessKey: 'dev'
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: 'Movies'
}

dynamodb.deleteTable(params, (err, res) => {
    if (err) {
        console.error('Unable delete table. Error: ', JSON.stringify(err, null, 2));
    } else {
        console.log('Delete table succeeded.');
    }
});