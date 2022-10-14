const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
    let numberOfCats = 0;
    for (let line of backyard) {
        for (let pos of line) {
            if (pos == "^^") {
                numberOfCats += 1;
            }
        }
    }
    return numberOfCats;
    // remove line with error and write your code here
}

module.exports = {
    countCats
};