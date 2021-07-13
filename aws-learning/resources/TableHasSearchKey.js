var AWS = require('aws-sdk');

var crypto = require('crypto');

AWS.config.update({
    region: 'ap-northeast-1',
    endpoint: 'http://localhost:4569',
    accessKeyId: 'dev',
    secretAccessKey: 'dev'
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = 'TableHasSearchKey1';

for(var i = 1; i <= 10; i++) {
    for(var j = 1; j <= 10; j++) {
        var params = {
            TableName: table,
            Item: {
                'hash_key': `hash_${i}`,
                'range_key': `rg_${j}`,
                'value': parseInt(`${i}${j}`)
            }
        };
    
        docClient.put(params, (err, data) => {
            if (err) {
                console.error('Unable add item to table. Error: ', JSON.stringify(err, null, 2));
            } else {
                console.log('Added item: ', JSON.stringify(data, null, 2));
            }
        });
    }
};