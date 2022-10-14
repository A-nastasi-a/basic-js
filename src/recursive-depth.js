const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

    calculateDepth(arr) {
        let depth = 1;
        let isFirst = true;
        let array = [];
        let curDepth;

        if (Array.isArray(arr)) {
            for (let i of arr) {
                if (Array.isArray(i)) {
                    if (isFirst) {
                        curDepth = depth;
                        depth += this.calculateDepth(i);
                        isFirst = false;
                    } else {
                        depth = curDepth;
                        depth += this.calculateDepth(i);
                    }
                    array.push(depth);
                }
            }
            if (array.length != 0) {
                return Math.max(...array);
            } else {
                return depth;
            }

        }
    }
}

module.exports = {
    DepthCalculator
};