export AWS_REGION=ap-northeast-1
export AWS_ACCESS_KEY_ID=dev
export AWS_SECRET_KEY=dev
export AWS_SECRET_ACCESS_KEY=dev

aws --endpoint-url=http://localhost:4569 --region=$AWS_REGION dynamodb create-table --table-name TableHasSearchKey1 --attribute-definitions AttributeName=hash_key,AttributeType=S AttributeName=range_key,AttributeType=S --key-schema AttributeName=hash_key,KeyType=HASH AttributeName=range_key,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
aws --endpoint-url=http://localhost:4569 --region=$AWS_REGION dynamodb create-table --table-name TableNotHasSearchKey1 --attribute-definitions AttributeName=hash_key,AttributeType=S --key-schema AttributeName=hash_key,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5


aws --endpoint-url=http://localhost:4566 s3 mb s3://s3-bucket-sample-1

aws --endpoint-url=http://localhost:4566 s3 cp ./json-data.json s3://s3-bucket-sample/json-data.json

