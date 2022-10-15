const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    const letters = 'ABCDEF';
    const nums = '0123456789';
    let groups = n.split('-');
    let result = true;

    for (let group of groups) {
        if (group.length == 2) {
            for (sym of group) {
                if (!letters.includes(sym) && !nums.includes(sym)) {
                    return false;
                }
            }
        } else {
            return false
        }
    }

    return result;
}
module.exports = {
    isMAC48Address
};