var { docClient, fs } = require('./aws');

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
        res.Items.forEach((item) => {
            fs.writeFileSync('query_data.json', `${item.year}: ${item.title}`);
        });
        console.log('Query succeeded.');
    }
});