const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let array = [];
    n = String(n);
    for (let i = 0; i < n.length; i++) {
        array.push(+(n.slice(0, i) + n.slice(i + 1, n.length)))
    }
    return Math.max(...array);
}

module.exports = {
    deleteDigit
};