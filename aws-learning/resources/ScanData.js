var AWS = require('aws-sdk');

var fs = require('fs');

AWS.config.update({
    region: 'ap-northeast-1',
    endpoint: 'http://localhost:4569',
    accessKeyId: 'dev',
    secretAccessKey: 'dev'
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: 'Movies',
    ProjectionExpression: '#yr, title, info.rating',
    FilterExpression: '#yr between :start_yr and :end_yr',
    ExpressionAttributeNames: {
        '#yr': 'year'
    },
    ExpressionAttributeValues: {
        ':start_yr': 1950,
        ':end_yr': 1959
    }
};

console.log('Scanning Movies table...');

docClient.scan(params, onScan);

function onScan(err, res) {
    if (err) {
        console.error('Unable to scan the table. Error: ', JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log('Scan succeeded.');
        res.Items.forEach(movie => {
            fs.writeFileSync(
                'scan_data.json', 
                `${movie.year}: ,
                ${movie.title}, - rating: ${movie.info.rating}`
            );
        });

        if (typeof res.LastEvaluatedKey !== 'undefined') {
            console.log('Scanning for more...');
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }
    }
}