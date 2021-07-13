var { docClient } = require('./aws');

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

docClient.put(params, function (err, data) {
    if (err) {
        console.error('Unable to add item. Error JSON: ', JSON.stringify(err, null, 2));
    } else {
        console.log('Added item succeeded');
    }
});