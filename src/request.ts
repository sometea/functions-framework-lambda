import { APIGatewayEvent, APIGatewayProxyResultV2 } from 'aws-lambda';
import { Request, Response } from '@google-cloud/functions-framework';
import http from 'http';
import { Errback, CookieOptions, MediaType, NextFunction, ParamsDictionary } from 'express-serve-static-core';
import { Socket } from 'net';
import { Readable } from 'stream';
import { ParsedQs } from 'qs';
import { Options, Ranges, Result } from 'range-parser';

export class ExpressRequest implements Request {
  constructor(public method: string, public path: string, headersRecord: Record<string, string | undefined>, public body: any) {
    this.url = path;
    this.ip = path;
    this.rawHeaders = Object.keys(headersRecord).map(k => `${k}: ${headersRecord[k]}`);
    this.headers = headersRecord;
  }
  rawBody?: Buffer | undefined;
  get(name: 'set-cookie'): string[] | undefined;
  get(name: string): string | undefined;
  get(name: unknown): string | string[] | undefined {
    throw new Error('Method not implemented.');
  }
  header(name: 'set-cookie'): string[] | undefined;
  header(name: string): string | undefined;
  header(name: unknown): string | string[] | undefined {
    throw new Error('Method not implemented.');
  }
  accepts(): string[];
  accepts(type: string): string | false;
  accepts(type: string[]): string | false;
  accepts(...type: string[]): string | false;
  accepts(type?: unknown, ...rest: unknown[]): string | false | string[] {
    throw new Error('Method not implemented.');
  }
  acceptsCharsets(): string[];
  acceptsCharsets(charset: string): string | false;
  acceptsCharsets(charset: string[]): string | false;
  acceptsCharsets(...charset: string[]): string | false;
  acceptsCharsets(charset?: unknown, ...rest: unknown[]): string | false | string[] {
    throw new Error('Method not implemented.');
  }
  acceptsEncodings(): string[];
  acceptsEncodings(encoding: string): string | false;
  acceptsEncodings(encoding: string[]): string | false;
  acceptsEncodings(...encoding: string[]): string | false;
  acceptsEncodings(encoding?: unknown, ...rest: unknown[]): string | false | string[] {
    throw new Error('Method not implemented.');
  }
  acceptsLanguages(): string[];
  acceptsLanguages(lang: string): string | false;
  acceptsLanguages(lang: string[]): string | false;
  acceptsLanguages(...lang: string[]): string | false;
  acceptsLanguages(lang?: unknown, ...rest: unknown[]): string | false | string[] {
    throw new Error('Method not implemented.');
  }
  range(size: number, options?: Options | undefined): Ranges | Result | undefined {
    throw new Error('Method not implemented.');
  }
  accepted: MediaType[] = [];
  param(name: string, defaultValue?: any): string {
    throw new Error('Method not implemented.');
  }
  is(type: string | string[]): string | false | null {
    throw new Error('Method not implemented.');
  }
  protocol = 'https';
  secure = true;
  ips: string[] = [];
  subdomains: string[] = [];
  url: string;
  hostname = '';
  host = '';
  fresh = true;
  stale = false;
  xhr = false;
  cookies: any;
  params: ParamsDictionary = {};
  query: ParsedQs = {};
  route: any;
  signedCookies: any;
  originalUrl = '';
  baseUrl = '';
  app: any;
  res?: any;
  next?: NextFunction | undefined;
  aborted = false;
  httpVersion = '1.1';
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  ip: string;
  complete = true;
  connection: any;
  socket: any;
  headers: http.IncomingHttpHeaders;
  rawHeaders: string[];
  trailers: NodeJS.Dict<string> = {};
  rawTrailers: string[] = [];
  setTimeout(msecs: number, callback?: (() => void) | undefined): this {
    throw new Error('Method not implemented.');
  }
  statusCode?: number | undefined;
  statusMessage?: string | undefined;
  destroy(error?: Error | undefined): this {
    throw new Error('Method not implemented.');
  }
  readableAborted = false;
  readable = false;
  readableDidRead = false;
  readableEncoding: BufferEncoding | null = null;
  readableEnded = false;
  readableFlowing = null;
  readableHighWaterMark: number = -1;
  readableLength: number = -1;
  readableObjectMode = false;
  destroyed = false;
  closed = false;
  errored: Error | null = null;
  _construct?(callback: (error?: Error | null | undefined) => void): void {
    throw new Error('Method not implemented.');
  }
  _read(size: number): void {
    throw new Error('Method not implemented.');
  }
  read(size?: number | undefined) {
    throw new Error('Method not implemented.');
  }
  setEncoding(encoding: BufferEncoding): this {
    throw new Error('Method not implemented.');
  }
  pause(): this {
    throw new Error('Method not implemented.');
  }
  resume(): this {
    throw new Error('Method not implemented.');
  }
  isPaused(): boolean {
    throw new Error('Method not implemented.');
  }
  unpipe(destination?: NodeJS.WritableStream | undefined): this {
    throw new Error('Method not implemented.');
  }
  unshift(chunk: any, encoding?: BufferEncoding | undefined): void {
    throw new Error('Method not implemented.');
  }
  wrap(stream: NodeJS.ReadableStream): this {
    throw new Error('Method not implemented.');
  }
  push(chunk: any, encoding?: BufferEncoding | undefined): boolean {
    throw new Error('Method not implemented.');
  }
  _destroy(error: Error | null, callback: (error?: Error | null | undefined) => void): void {
    throw new Error('Method not implemented.');
  }
  addListener(event: 'close', listener: () => void): this;
  addListener(event: 'data', listener: (chunk: any) => void): this;
  addListener(event: 'end', listener: () => void): this;
  addListener(event: 'error', listener: (err: Error) => void): this;
  addListener(event: 'pause', listener: () => void): this;
  addListener(event: 'readable', listener: () => void): this;
  addListener(event: 'resume', listener: () => void): this;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;
  addListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  emit(event: 'close'): boolean;
  emit(event: 'data', chunk: any): boolean;
  emit(event: 'end'): boolean;
  emit(event: 'error', err: Error): boolean;
  emit(event: 'pause'): boolean;
  emit(event: 'readable'): boolean;
  emit(event: 'resume'): boolean;
  emit(event: string | symbol, ...args: any[]): boolean;
  emit(event: unknown, err?: unknown, ...rest: unknown[]): boolean {
    throw new Error('Method not implemented.');
  }
  on(event: 'close', listener: () => void): this;
  on(event: 'data', listener: (chunk: any) => void): this;
  on(event: 'end', listener: () => void): this;
  on(event: 'error', listener: (err: Error) => void): this;
  on(event: 'pause', listener: () => void): this;
  on(event: 'readable', listener: () => void): this;
  on(event: 'resume', listener: () => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;
  on(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  once(event: 'close', listener: () => void): this;
  once(event: 'data', listener: (chunk: any) => void): this;
  once(event: 'end', listener: () => void): this;
  once(event: 'error', listener: (err: Error) => void): this;
  once(event: 'pause', listener: () => void): this;
  once(event: 'readable', listener: () => void): this;
  once(event: 'resume', listener: () => void): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  once(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  prependListener(event: 'close', listener: () => void): this;
  prependListener(event: 'data', listener: (chunk: any) => void): this;
  prependListener(event: 'end', listener: () => void): this;
  prependListener(event: 'error', listener: (err: Error) => void): this;
  prependListener(event: 'pause', listener: () => void): this;
  prependListener(event: 'readable', listener: () => void): this;
  prependListener(event: 'resume', listener: () => void): this;
  prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
  prependListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  prependOnceListener(event: 'close', listener: () => void): this;
  prependOnceListener(event: 'data', listener: (chunk: any) => void): this;
  prependOnceListener(event: 'end', listener: () => void): this;
  prependOnceListener(event: 'error', listener: (err: Error) => void): this;
  prependOnceListener(event: 'pause', listener: () => void): this;
  prependOnceListener(event: 'readable', listener: () => void): this;
  prependOnceListener(event: 'resume', listener: () => void): this;
  prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
  prependOnceListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  removeListener(event: 'close', listener: () => void): this;
  removeListener(event: 'data', listener: (chunk: any) => void): this;
  removeListener(event: 'end', listener: () => void): this;
  removeListener(event: 'error', listener: (err: Error) => void): this;
  removeListener(event: 'pause', listener: () => void): this;
  removeListener(event: 'readable', listener: () => void): this;
  removeListener(event: 'resume', listener: () => void): this;
  removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
  removeListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.');
  }
  [Symbol.asyncIterator](): AsyncIterableIterator<any> {
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
