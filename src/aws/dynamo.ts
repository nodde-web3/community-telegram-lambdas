import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { AWS_REGION } from './common';

const marshallOptions = {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true
};

const unmarshallOptions = {
    wrapNumbers: false
};

const translateConfig = { marshallOptions, unmarshallOptions };

export const dynamo = new DynamoDBClient({ region: AWS_REGION });
export const documentClient = DynamoDBDocumentClient.from(dynamo, translateConfig);

