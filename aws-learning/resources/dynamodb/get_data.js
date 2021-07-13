var { docClient, fs } = require('./aws');

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
        fs.writeFileSync('get_data.json', JSON.stringify(res, null, 2));
        console.log('Get item succeeded.');
    }
});
