# Functions Framework on AWS Lambda

This is an experimental project to deploy cloud functions developed using the
[Functions Framework](https://cloud.google.com/functions/docs/functions-framework) on AWS Lambda via the 
[Serverless Framework](https://www.serverless.com/). This is achieved
by wrapping the Express Request and Response objects for consumption
by Lambda functions that follow the standard signature of functions triggered
by the API Gateway.