// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set config 
AWS.config.update({
    region: 'ap-northeast-1',
    endpoint: 'http://localhost:4569',
    accessKeyId: 'dev',
    secretAccessKey: 'dev'
});

// Create the DynamoDB service object
var dynamodb = new AWS.DynamoDB();

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
    dynamodb, docClient
}
