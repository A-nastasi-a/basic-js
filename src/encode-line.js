const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let finalStr = '';
    let amount = 1;
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] == str[i + 1] && i + 1 != str.length - 1) {
            amount += 1;
        } else if (str[i] == str[i + 1] && i + 1 == str.length - 1) {
            amount += 1;
            if (amount != 1) {
                finalStr += `${amount}${str[i]}`;
            } else {
                finalStr += `${str[i]}`;
            }
        } else if (str[i] != str[i + 1] && i + 1 == str.length - 1) {
            if (amount != 1) {
                finalStr += `${amount}${str[i]}${str[i + 1]}`;
            } else {
                finalStr += `${str[i]}${str[i + 1]}`;
            }

        } else if (str[i] != str[i + 1] && i + 1 != str.length - 1) {
            if (amount != 1) {
                finalStr += `${amount}${str[i]}`;
            } else {
                finalStr += `${str[i]}`;
            }

            amount = 1;
        }
    }
    return finalStr;
}

module.exports = {
    encodeLine
};