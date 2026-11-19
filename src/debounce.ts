export interface Debounced<A extends unknown[]> {
  (...args: A): void;
  cancel(): void;
}

export function debounce<A extends unknown[]>(
  fn: (...args: A) => void,
  delay: number,
): Debounced<A> {
  let timerId: ReturnType<typeof setTimeout> | undefined;

  const cancel = () => {
    clearTimeout(timerId);
    timerId = undefined;
  };

  const debounced = (...args: A) => {
    cancel();
    timerId = setTimeout(() => {
      timerId = undefined;
      fn(...args);
    }, delay);
  };

  return Object.assign(debounced, { cancel });
}
