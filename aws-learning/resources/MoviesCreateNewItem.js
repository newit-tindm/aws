var AWS = require('aws-sdk');

AWS.config.update({
    region: "ap-northeast-1",
    endpoint: "http://localhost:4569",
    accessKeyId: 'dev',
    secretAccessKey: 'dev'
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = 'Movies';

var year = 2015;

var title = 'The big new movies';

var params = {
    TableName: table,
    Item: {
        'year': year,
        'title': title,
        'info': {
            'plot': 'Nothing happen at all.',
            'rating': 0
        }
    }
};

console.log('Adding new item...');

docClient.put(params, function (err, data) {
    if (err) {
        console.error('Unable to add item. Error JSON: ', JSON.stringify(err, null, 2));
    } else {
        console.log('Added item: ', JSON.stringify(data, null, 2));
    }
});