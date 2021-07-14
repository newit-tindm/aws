let converter = require('json-2-csv');

let fs = require('fs');

let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

let json2csvCallback = (err, csv) => {
    if (err) throw err;
    fs.writeFileSync('data.csv', csv);
}

converter.json2csv(data, json2csvCallback);