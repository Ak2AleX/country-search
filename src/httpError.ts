export class HttpError extends Error {
  constructor(readonly status: number) {
    super(`HTTP error: ${status}`);
    this.name = 'HttpError';
    this.status = status;
  }
}
