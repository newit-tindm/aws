var { dynamodb } = require('./aws');

/**
 * KeySchema:            - AttributeName: type - string
 *                       - KeyType: HASH - partition key
 *                                  RANGE - sort key
 * AttributeDefinitions: - AttributeName: type - string
 *                       - AttributeType: N - attribute of type number
 *                                        S - attribute of type string
 *                                        B - attribute of type binary
 */

var params = {
    TableName: 'Movies',
    KeySchema: [
        {
            AttributeName: 'year',
            KeyType: 'HASH'
        },
        {
            AttributeName: 'title',
            KeyType: 'RANGE'
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'year',
            AttributeType: 'N'
        },
        {
            AttributeName: 'title',
            AttributeType: 'S'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

// Call DynamoDB to create new table
dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.error('Unable to access table. Error JSON: ', JSON.stringify(err, null, 2));
    } else {
        console.log('Created table. Table description JSON: ', JSON.stringify(data, null, 2));
    }
})