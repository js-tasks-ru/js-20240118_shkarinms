/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const getterPath = path.split('.');
  if (!getterPath) return;
  return (obj) => {
    for (let path of getterPath) {
      if (!obj[path]) return;
      obj = obj[path];
    }
    return obj;
  }
}
