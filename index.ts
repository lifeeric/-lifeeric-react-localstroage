/***
 * if the window isn't undefined, it return true
 * so now we can have access to localStorage
 */
const isBrowser = typeof window !== "undefined";

export const setLocalStorage = (name: string, token: string) =>
  isBrowser && window.localStorage.setItem(name, token);

export const getLocalStorage = (name: string) =>
  isBrowser && window.localStorage.getItem(name);

export const rmLocalStorage = (name: string) =>
  isBrowser && window.localStorage.removeItem(name);
