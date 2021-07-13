var AWS = require('aws-sdk');

var fs = require('fs');

AWS.config.update({
    region: 'ap-northeast-1',
    endpoint: 'http://localhost:4569',
    accessKeyId: 'dev',
    secretAccessKey: 'dev'
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = 'TableHasSearchKey';

console.log('Querying all items has hash "hash_7"');

var params = {
    TableName: table,
    KeyConditionExpression: '#hk = :hk',
    ExpressionAttributeNames: {
        '#hk': 'hash_key'
    },
    ExpressionAttributeValues: {
        ':hk': 'hash_7'
    }
};

docClient.query(params, (err, res) => {
    if (err) {
        console.error('Unable to query. Error: ', JSON.stringify(err, null, 2));
    } else {
        console.log('Query succeeded.');
        // res.Items.forEach((item) => {
        //     fs.writeFileSync('query_table_has_search_key.json', `${item.hash_key}: ${item.range_key}`);
        // });
        fs.writeFileSync('query_table_has_search_key.json', JSON.stringify(res, null, 2));
    }
});