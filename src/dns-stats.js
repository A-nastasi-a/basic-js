const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let obj = {};

    let str, amount = 0;
    let arr = [];

    for (let i of domains) {
        str = '';

        for (let j of i.split('.').reverse()) {
            str += `.${j}`;
            arr.push(str);
        }
    }

    s = new Set(arr);
    for (let i of s) {
        amount = 0;
        for (let j of domains) {
            let l = i.split('.').reverse();

            l = l.join('.').slice(0, i.length - 1);
            if (j.includes(l)) {
                amount += 1;
            }
        }
        obj[i] = amount;
    }
    return obj;
}

module.exports = {
    getDNSStats
};