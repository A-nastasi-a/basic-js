const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

    if (typeof sampleActivity !== "string") {
        return false;
    }

    if (isNaN(sampleActivity)) {
        return false;
    }
    if (sampleActivity > MODERN_ACTIVITY || sampleActivity < 1) {
        return false;
    }

    const dev = sampleActivity / MODERN_ACTIVITY;
    let fullPeriod = (Math.log(dev) * HALF_LIFE_PERIOD) / 0.693;
    return Math.ceil(Math.abs(fullPeriod));

    // remove line with error and write your code here
}

module.exports = {
    dateSample
};