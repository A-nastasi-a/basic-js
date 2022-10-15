const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let newS = new Set(names);
    let k = 0;
    for (let i of newS) {
        for (let j = 0; j < names.length; j++) {
            if (i == names[j] && k > 0) {
                console.log(i, names[j]);
                names[j] = `${i}(${k})`;
                k++;
            } else if (i == names[j] && k == 0) {
                k++;
            }
        }
        k = 0;
    }
    return names;
}

module.exports = {
    renameFiles
};