import { describe, expect, it } from 'vitest';
import { HttpError } from './httpError.js';

describe('HttpError', () => {
  it('является Error и HttpError', () => {
    const error = new HttpError(500);

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(HttpError);
  });

  it('хранит статус ответа', () => {
    expect(new HttpError(503).status).toBe(503);
  });

  it('имеет name HttpError', () => {
    expect(new HttpError(500).name).toBe('HttpError');
  });

  it('содержит статус в сообщении', () => {
    expect(new HttpError(500).message).toContain('500');
  });
});
