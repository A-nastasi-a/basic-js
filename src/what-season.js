const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = '') {
    if (date == "" || Object.getOwnPropertyNames(date) == []) {
        return 'Unable to determine the time of year!';
    }
    try {
        date.getDay();
    } catch {
        throw new Error('Invalid date!');
    }
    if (Object.getOwnPropertyNames(date).length !== 0) {
        throw new Error('Invalid date!');
    }

    if (date instanceof Date) {

        if (date.getMonth() > 10 || date.getMonth() < 2) {
            return `winter`;
        } else if (date.getMonth() < 5) {
            return `spring`;
        } else if (date.getMonth() < 8) {
            return `summer`;
        } else {
            return `autumn`;
        }
    } else {
        throw new Error('Invalid date!');
    }



    // return date;

    // throw new Error('Invalid date!');
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    getSeason
};