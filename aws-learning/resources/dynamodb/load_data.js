var { docClient, fs } = require('./aws');

console.log('Importing Movies into DynamoDB. Please wait.');

var allMovies = JSON.parse(fs.readFileSync('movie_data.json', 'utf8'));

allMovies.forEach(function(movie) {
    var params = {
        TableName: 'Movies',
        Item: {
            'year': movie.year,
            'title': movie.title,
            'info': movie.info
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error('Unable to add movie', movie.title, '.Error JSON', JSON.stringify(err, null, 2));
        } else {
            console.log('PutItem succeeded: ', movie.title);
        }
    });
});