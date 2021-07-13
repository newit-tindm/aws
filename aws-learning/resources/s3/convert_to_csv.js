var { parse } = require('json2csv');

var fs = require('fs');

var data = fs.readFileSync('json_data_s3.json', 'utf8');

var fields = ['value'];

var opts = { fields };

var csv = parse(data, opts);

console.log(csv);

fs.writeFileSync('csv_data_s3.csv', csv);