const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let finalString = '';
    if (typeof options['repeatTimes'] == "undefined") {
        options['repeatTimes'] = 1;
    }
    for (let i = 0; i < options['repeatTimes']; i++) {
        finalString += str;
        if (typeof options['addition'] != 'undefined') {
            if (typeof options['additionRepeatTimes'] == 'undefined') {
                options['additionRepeatTimes'] = 1;
            }
            for (let j = 0; j < options['additionRepeatTimes']; j++) {
                if (j != 0) {
                    if (typeof options['additionSeparator'] != 'undefined') {
                        finalString += options['additionSeparator'];
                    } else {
                        finalString += '|';
                    }
                }
                finalString += options['addition'];
            }

        }
        if (i != options['repeatTimes'] - 1) {
            if (typeof options['separator'] != 'undefined') {
                finalString += options['separator'];
            } else {
                finalString += '+';
            }
        }
    }

    return finalString;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    repeater
};