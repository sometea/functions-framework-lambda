import { http, Request, Response } from '@google-cloud/functions-framework';
import { adapt } from './sls-adapter';

export function hello(req: Request, res: Response) {
  res.send('Hello World!');
}

export function two(req: Request, res: Response) {
  res.send(JSON.stringify(req, function (key, value) {
    if (['socket', 'client', 'req'].includes(key)) {
      return '(not serialized)';
    }
    return value;
  }));
}

export const adaptedHello = adapt(hello);

export const adaptedTwo = adapt(two);

http('hello', hello);

http('two', two);