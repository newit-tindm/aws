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

var year = 2015;

var title = 'The big new movies';

var params = {
    TableName: table,
    Key: {
        'year': year,
        'title': title
    },
    UpdateExpression: 'set info.rating = :r, info.plot = :p, info.actors = :a',
    ExpressionAttributeValues: {
        ':r': 5.5,
        ':p': 'Everything happens all at once.',
        ':a': [
            'Larry',
            'Moe',
            'Curly'
        ],
    },
    ReturnValues: 'UPDATED_NEW'
};

console.log('Updating the item...');

docClient.update(params, function (err, res) {
    if (err) {
        console.error('Unable update item, Error JOSN: ', JSON.stringify(err, null, 2));
    } else {
        fs.writeFileSync('movies_update_data.json', JSON.stringify(res, null, 2));
        console.log('Update item succeeded.');
    }
})