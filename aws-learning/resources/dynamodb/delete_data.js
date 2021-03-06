var { docClient } = require('./aws');

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

docClient.delete(params, (err, res) => {
    if (err) {
        console.error('Unable to delete item. Error: ', JSON.stringify(err, null, 2));
    } else {
        console.log('Delete item succeeded.');
    }
})