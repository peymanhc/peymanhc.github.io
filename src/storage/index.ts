import crypto from 'provider/crypto';

const prefix = 'dashboard-';

const shouldParse = (data: any) =>
  data && data[0] && (data[0] === '{' || data[0] === '[');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Read<T> = any;
/**
 * Register an item via key and value in local storage
 * @param  {Key} key
 * @param  {any} data
 * @returns {any} retrun
 */
export function store(key: any, data: any, storage = window.localStorage): any {
  if (!window.localStorage || !key) {
    return;
  }
  if (typeof data === 'object') data = JSON.stringify(data);
  else data = String(data);
  const cryptoKey: any = crypto.encrypt(`${prefix}${key}`);
  const cryptoValue: any = crypto.encrypt(data);
  storage.setItem(cryptoKey, cryptoValue);
}
/**
 * Get an item from local storage db
 * @param  {Key} key
 * @returns {Read<any>}
 */
export function read(key: any, storage = window.localStorage): Read<any> {
  if (!storage || !key) {
    return;
  }
  const cryptoKey: any = crypto.encrypt(`${prefix}${key}`);
  let data: any = localStorage.getItem(cryptoKey);
  if (!data) {
    return;
  }

  const parse = JSON.parse;
  const decrypt: any = crypto.decrypt(data);
  try {
    return shouldParse(decrypt) ? JSON.parse(decrypt) : decrypt;
  } catch (error) {
    return parse(`"${decrypt}"`);
  }
}
/**
 * Remove an item from local storage db
 * @param  {Key} key
 * @returns {any}
 */
export function remove(key: any, storage = window.localStorage): any {
  const cryptoKey: any = crypto.encrypt(`${prefix}${key}`);
  if (!storage || !key) {
    return;
  }

  storage.removeItem(cryptoKey);
}
