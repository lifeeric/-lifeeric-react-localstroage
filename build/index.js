"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rmLocalStorage = exports.getLocalStorage = exports.setLocalStorage = void 0;
/***
 * if the window isn't undefined, it return true
 * so now we can have access to localStorage
 */
const isBrowser = typeof window !== "undefined";
const setLocalStorage = (name, token) => isBrowser && window.localStorage.setItem(name, token);
exports.setLocalStorage = setLocalStorage;
const getLocalStorage = (name) => isBrowser && window.localStorage.getItem(name);
exports.getLocalStorage = getLocalStorage;
const rmLocalStorage = (name) => isBrowser && window.localStorage.removeItem(name);
exports.rmLocalStorage = rmLocalStorage;
