var AWS = require('aws-sdk');

AWS.config.update({
   region: 'ap-northeast-1',
   endpoint: 'http://localhost:4569', 
   accessKeyId: 'dev',
   secretAccessKey: 'dev'
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = 'Movies';

var title = 'The big new movies';

var year = 2015;

var params = {
    TableName: table,
    Key: {
        'year': year,
        'title': title,
    },
    // ConditionExpression: 'info.rating <= :val',
    // ExpressionAttributeValues: {
    //     ':val': 4.0
    // }
};

console.log('Attempting a conditional delete...');

docClient.delete(params, (err, res) => {
    if (err) {
        console.error('Unable to delete item. Error: ', JSON.stringify(err, null, 2));
    } else {
        console.log('Delete item succeeded: ', JSON.stringify(res, null, 2));
    }
})