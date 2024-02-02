/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (!string || size === 0) return "";

  const line = string.split("");
  let count = 0;
  let lastLetter = '';
  let returnLine = '';

  for (let letter of line) {
    if (letter === lastLetter) {
      count++;
    } else {
      count = 0;
    }
    lastLetter = letter;
    if (count >= size) continue;
    returnLine += letter;
  }

  return returnLine;
}

