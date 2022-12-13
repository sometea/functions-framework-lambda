import { http, Request, Response } from '@google-cloud/functions-framework';
import { adapt } from './sls-adapter';

export function hello(req: Request, res: Response) {
  res.send('Hello Norld!');
}

export function two(req: Request, res: Response) {
  res.send(JSON.stringify(req));
}

export const adaptedHello = adapt(hello);

export const adaptedTwo = adapt(two);

http('hello', hello);

http('two', two);