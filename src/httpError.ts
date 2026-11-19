export class HttpError extends Error {
  status = -1;

  constructor(status: number) {
    super('');
    void status;
  }
}
