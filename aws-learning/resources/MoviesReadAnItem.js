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
    }
}

docClient.get(params, function(err, res) {
    if (err) {
        console.error('Unable to get item. Error JSON: ', JSON.stringify(err, null, 2));
    } else {
        fs.writeFileSync('movies_get_item.json', JSON.stringify(res, null, 2));
        console.log('Get item succeeded.');
    }
});
