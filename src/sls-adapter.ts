import { Request, Response } from '@google-cloud/functions-framework';
import { APIGatewayEvent, APIGatewayProxyResultV2 } from 'aws-lambda';
import { ExpressRequest, ExpressResponse } from './request';

export function adapt(frameworkFunction: (req: Request, res: Response) => void): (event: APIGatewayEvent) => Promise<APIGatewayProxyResultV2> {
  return function (event: APIGatewayEvent) {
    return new Promise((resolve, reject) => {
      const req = new ExpressRequest(event.httpMethod, event.path, event.headers, event.body);
      const res = new ExpressResponse(resolve, reject, req);
      frameworkFunction(req, res);
    });
  }
}