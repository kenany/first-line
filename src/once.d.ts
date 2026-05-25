declare module 'once' {
  /**
   * Wraps a function so it can only be called once. Subsequent calls are
   * no-ops that return the value from the first invocation.
   *
   * @param fn The function to wrap.
   * @returns A wrapped version of `fn` that only executes once.
   */
  // biome-ignore lint/suspicious/noExplicitAny: necessary for generic function wrapping
  function once<T extends (...args: any[]) => any>(fn: T): T;
  export = once;
}
