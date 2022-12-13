import { Request, Response } from '@google-cloud/functions-framework';
import { APIGatewayEvent, APIGatewayProxyResultV2 } from 'aws-lambda';
import { createRequest, ExpressResponse } from './request';

export function adapt(frameworkFunction: (req: Request, res: Response) => void): (event: APIGatewayEvent) => Promise<APIGatewayProxyResultV2> {
  return function (event: APIGatewayEvent) {
    return new Promise((resolve, reject) => {
      const req = createRequest(event);
      const res = new ExpressResponse(resolve, reject, req);
      frameworkFunction(req, res);
    });
  }
}