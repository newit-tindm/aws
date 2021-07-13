// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Load the fs library for Node.js to write/ read file
var fs = require('fs');

// Set config 
AWS.config.update({
    region: 'ap-northeast-1',
    endpoint: 'http://localhost:4569',
    accessKeyId: 'dev',
    secretAccessKey: 'dev'
});

// Create the DynamoDB service object
var dynamodb = new AWS.DynamoDB();

// Create document client to access a DynamoDB table
var docClient = new AWS.DynamoDB.DocumentClient();

// Export to using in another files
module.exports = {
    dynamodb, docClient, fs
}
