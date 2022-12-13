import { APIGatewayEvent, APIGatewayProxyResultV2 } from 'aws-lambda';
import { Request, Response } from '@google-cloud/functions-framework';
import http from 'http';
import { Errback, CookieOptions } from 'express-serve-static-core';
import { Socket } from 'net';
import { Readable } from 'stream';

class ServerlessRequest extends http.IncomingMessage {
  constructor(method: string, url: string, headers: Record<string, string | undefined>, body: string, remoteAddress: string) {
    super({
      encrypted: true,
      readable: false,
      remoteAddress,
      address: () => ({ port: 443 }),
    } as any);

    if (typeof headers['content-length'] === 'undefined') {
      headers['content-length'] = Buffer.byteLength(body).toString();
    }

    Object.assign(this, {
      ip: remoteAddress,
      complete: true,
      httpVersion: '1.1',
      httpVersionMajor: '1',
      httpVersionMinor: '1',
      method,
      headers,
      body,
      url,
      end: () => this,
      destroy: () => this,
    });

    this._read = () => {
      this.push(body);
      this.push(null);
    };
  }

}


export class ExpressResponse implements Response {
  constructor(
    private res: (result: APIGatewayProxyResultV2) => void, 
    private rej: (reason: any) => void,
    public req: any
    ) {}
  status(code: number): this {
    this.statusCode = code;
    return this;
  }
  sendStatus(code: number): this {
    return this.status(code).send('');
  }
  links(links: any): this {
    throw new Error('Method not implemented.');
  }
  send(body: string) {
    this.res({
      statusCode: this.statusCode,
      body,
    });
    return this;
  };
  json(body: any) {
    return this.send(JSON.stringify(body));
  };
  jsonp() {
    return this;
  };
  sendFile(path: string, fn?: Errback | undefined): void;
  sendFile(path: string, options: any, fn?: Errback | undefined): void;
  sendFile(path: unknown, options?: unknown, fn?: unknown): void {
    throw new Error('Method not implemented.');
  }
  sendfile(path: string): void;
  sendfile(path: string, options: any): void;
  sendfile(path: string, fn: Errback): void;
  sendfile(path: string, options: any, fn: Errback): void;
  sendfile(path: unknown, options?: unknown, fn?: unknown): void {
    throw new Error('Method not implemented.');
  }
  download(path: string, fn?: Errback | undefined): void;
  download(path: string, filename: string, fn?: Errback | undefined): void;
  download(path: string, filename: string, options: any, fn?: Errback | undefined): void;
  download(path: unknown, filename?: unknown, options?: unknown, fn?: unknown): void {
    throw new Error('Method not implemented.');
  }
  contentType(type: string): this {
    throw new Error('Method not implemented.');
  }
  type(type: string): this {
    throw new Error('Method not implemented.');
  }
  format(obj: any): this {
    throw new Error('Method not implemented.');
  }
  attachment(filename?: string | undefined): this {
    throw new Error('Method not implemented.');
  }
  set(field: any): this;
  set(field: string, value?: string | string[] | undefined): this;
  set(field: unknown, value?: unknown): this {
    throw new Error('Method not implemented.');
  }
  header(field: any): this;
  header(field: string, value?: string | string[] | undefined): this;
  header(field: unknown, value?: unknown): this {
    throw new Error('Method not implemented.');
  }
  headersSent = false;
  get(field: string): string | undefined {
    throw new Error('Method not implemented.');
  }
  clearCookie(name: string, options?: CookieOptions | undefined): this {
    throw new Error('Method not implemented.');
  }
  cookie(name: string, val: string, options: CookieOptions): this;
  cookie(name: string, val: any, options: CookieOptions): this;
  cookie(name: string, val: any): this;
  cookie(name: unknown, val: unknown, options?: unknown): this {
    throw new Error('Method not implemented.');
  }
  location(url: string): this {
    throw new Error('Method not implemented.');
  }
  redirect(url: string): void;
  redirect(status: number, url: string): void;
  redirect(url: string, status: number): void;
  redirect(url: unknown, status?: unknown): void {
    throw new Error('Method not implemented.');
  }
  render(view: string, options?: object | undefined, callback?: ((err: Error, html: string) => void) | undefined): void;
  render(view: string, callback?: ((err: Error, html: string) => void) | undefined): void;
  render(view: unknown, options?: unknown, callback?: unknown): void {
    throw new Error('Method not implemented.');
  }
  locals: Record<string, any> = {};
  charset = 'UTF-8';
  vary(field: string): this {
    throw new Error('Method not implemented.');
  }
  app: any = undefined;
  append(field: string, value?: string | string[] | undefined): this {
    throw new Error('Method not implemented.');
  }
  statusCode: number = 200;
  statusMessage = '';
  assignSocket(socket: Socket): void {
    throw new Error('Method not implemented.');
  }
  detachSocket(socket: Socket): void {
    throw new Error('Method not implemented.');
  }
  writeContinue(callback?: (() => void) | undefined): void {
    throw new Error('Method not implemented.');
  }
  writeEarlyHints(hints: Record<string, string | string[]>, callback?: (() => void) | undefined): void {
    throw new Error('Method not implemented.');
  }
  writeHead(statusCode: number, statusMessage?: string | undefined, headers?: http.OutgoingHttpHeaders | http.OutgoingHttpHeader[] | undefined): this;
  writeHead(statusCode: number, headers?: http.OutgoingHttpHeaders | http.OutgoingHttpHeader[] | undefined): this;
  writeHead(statusCode: unknown, statusMessage?: unknown, headers?: unknown): this {
    throw new Error('Method not implemented.');
  }
  writeProcessing(): void {
    throw new Error('Method not implemented.');
  }
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  connection: Socket | null = null;
  socket: Socket | null = null;
  setTimeout(msecs: number, callback?: (() => void) | undefined): this {
    throw new Error('Method not implemented.');
  }
  setHeader(name: string, value: string | number | readonly string[]): this {
    throw new Error('Method not implemented.');
  }
  getHeader(name: string): string | number | string[] | undefined {
    throw new Error('Method not implemented.');
  }
  getHeaders(): http.OutgoingHttpHeaders {
    throw new Error('Method not implemented.');
  }
  getHeaderNames(): string[] {
    throw new Error('Method not implemented.');
  }
  hasHeader(name: string): boolean {
    throw new Error('Method not implemented.');
  }
  removeHeader(name: string): void {
    throw new Error('Method not implemented.');
  }
  addTrailers(headers: http.OutgoingHttpHeaders | readonly [string, string][]): void {
    throw new Error('Method not implemented.');
  }
  flushHeaders(): void {
    throw new Error('Method not implemented.');
  }
  writable = false;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = -1;
  writableLength = -1;
  writableObjectMode = false;
  writableCorked = -1;
  destroyed = false;
  closed = false;
  errored: Error | null = null;
  writableNeedDrain = false;
  _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null | undefined) => void): void {
    throw new Error('Method not implemented.');
  }
  _writev?(chunks: { chunk: any; encoding: BufferEncoding; }[], callback: (error?: Error | null | undefined) => void): void {
    throw new Error('Method not implemented.');
  }
  _construct?(callback: (error?: Error | null | undefined) => void): void {
    throw new Error('Method not implemented.');
  }
  _destroy(error: Error | null, callback: (error?: Error | null | undefined) => void): void {
    throw new Error('Method not implemented.');
  }
  _final(callback: (error?: Error | null | undefined) => void): void {
    throw new Error('Method not implemented.');
  }
  write(chunk: any, callback?: ((error: Error | null | undefined) => void) | undefined): boolean;
  write(chunk: any, encoding: BufferEncoding, callback?: ((error: Error | null | undefined) => void) | undefined): boolean;
  write(chunk: unknown, encoding?: unknown, callback?: unknown): boolean {
    throw new Error('Method not implemented.');
  }
  setDefaultEncoding(encoding: BufferEncoding): this {
    throw new Error('Method not implemented.');
  }
  end(cb?: (() => void) | undefined): this;
  end(chunk: any, cb?: (() => void) | undefined): this;
  end(chunk: any, encoding: BufferEncoding, cb?: (() => void) | undefined): this;
  end(chunk?: unknown, encoding?: unknown, cb?: unknown): this {
    throw new Error('Method not implemented.');
  }
  cork(): void {
    throw new Error('Method not implemented.');
  }
  uncork(): void {
    throw new Error('Method not implemented.');
  }
  destroy(error?: Error | undefined): this {
    throw new Error('Method not implemented.');
  }
  addListener(event: 'close', listener: () => void): this;
  addListener(event: 'drain', listener: () => void): this;
  addListener(event: 'error', listener: (err: Error) => void): this;
  addListener(event: 'finish', listener: () => void): this;
  addListener(event: 'pipe', listener: (src: Readable) => void): this;
  addListener(event: 'unpipe', listener: (src: Readable) => void): this;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;
  addListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  emit(event: 'close'): boolean;
  emit(event: 'drain'): boolean;
  emit(event: 'error', err: Error): boolean;
  emit(event: 'finish'): boolean;
  emit(event: 'pipe', src: Readable): boolean;
  emit(event: 'unpipe', src: Readable): boolean;
  emit(event: string | symbol, ...args: any[]): boolean;
  emit(event: unknown, src?: unknown, ...rest: unknown[]): boolean {
    throw new Error('Method not implemented.');
  }
  on(event: 'close', listener: () => void): this;
  on(event: 'drain', listener: () => void): this;
  on(event: 'error', listener: (err: Error) => void): this;
  on(event: 'finish', listener: () => void): this;
  on(event: 'pipe', listener: (src: Readable) => void): this;
  on(event: 'unpipe', listener: (src: Readable) => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;
  on(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  once(event: 'close', listener: () => void): this;
  once(event: 'drain', listener: () => void): this;
  once(event: 'error', listener: (err: Error) => void): this;
  once(event: 'finish', listener: () => void): this;
  once(event: 'pipe', listener: (src: Readable) => void): this;
  once(event: 'unpipe', listener: (src: Readable) => void): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  once(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  prependListener(event: 'close', listener: () => void): this;
  prependListener(event: 'drain', listener: () => void): this;
  prependListener(event: 'error', listener: (err: Error) => void): this;
  prependListener(event: 'finish', listener: () => void): this;
  prependListener(event: 'pipe', listener: (src: Readable) => void): this;
  prependListener(event: 'unpipe', listener: (src: Readable) => void): this;
  prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
  prependListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  prependOnceListener(event: 'close', listener: () => void): this;
  prependOnceListener(event: 'drain', listener: () => void): this;
  prependOnceListener(event: 'error', listener: (err: Error) => void): this;
  prependOnceListener(event: 'finish', listener: () => void): this;
  prependOnceListener(event: 'pipe', listener: (src: Readable) => void): this;
  prependOnceListener(event: 'unpipe', listener: (src: Readable) => void): this;
  prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
  prependOnceListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  removeListener(event: 'close', listener: () => void): this;
  removeListener(event: 'drain', listener: () => void): this;
  removeListener(event: 'error', listener: (err: Error) => void): this;
  removeListener(event: 'finish', listener: () => void): this;
  removeListener(event: 'pipe', listener: (src: Readable) => void): this;
  removeListener(event: 'unpipe', listener: (src: Readable) => void): this;
  removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
  removeListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean | undefined; } | undefined): T {
    throw new Error('Method not implemented.');
  }
  off(eventName: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error('Method not implemented.');
  }
  removeAllListeners(event?: string | symbol | undefined): this {
    throw new Error('Method not implemented.');
  }
  setMaxListeners(n: number): this {
    throw new Error('Method not implemented.');
  }
  getMaxListeners(): number {
    throw new Error('Method not implemented.');
  }
  listeners(eventName: string | symbol): Function[] {
    throw new Error('Method not implemented.');
  }
  rawListeners(eventName: string | symbol): Function[] {
    throw new Error('Method not implemented.');
  }
  listenerCount(eventName: string | symbol): number {
    throw new Error('Method not implemented.');
  }
  eventNames(): (string | symbol)[] {
    throw new Error('Method not implemented.');
  }
  
}

export function createRequest(event: APIGatewayEvent): Request {
  return new ServerlessRequest(
    event.httpMethod,
    event.path,
    event.headers,
    event.body || '',
    event.path
  ) as unknown as Request;
}
