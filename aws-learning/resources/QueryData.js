var AWS = require('aws-sdk');

var fs = require('fs');

AWS.config.update({
    region: 'ap-northeast-1',
    endpoint: 'http://localhost:4569',
    accessKeyId: 'dev',
    secretAccessKey: 'dev'
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = 'Movies';

console.log('Querying for movies from 1985');

var params = {
    TableName: table,
    KeyConditionExpression: '#yr = :yyyy',
    ExpressionAttributeNames: {
        '#yr': 'year'
    },
    ExpressionAttributeValues: {
        ':yyyy': 1985
    }
};

docClient.query(params, (err, res) => {
    if (err) {
        console.error('Unable to query. Error: ', JSON.stringify(err, null, 2));
    } else {
        console.log('Query succeeded.');
        res.Items.forEach((item) => {
            fs.writeFileSync('query_data.json', `${item.year}: ${item.title}`);
        });
    }
});