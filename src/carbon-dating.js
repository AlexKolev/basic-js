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
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	//sampleActivity = +sampleActivity;
	if (typeof sampleActivity != "string") {
		return false;
	}
	sampleActivity = Number(sampleActivity);
	if ((!isNaN(sampleActivity)) && sampleActivity > 0) {
		let k = 0.693 / HALF_LIFE_PERIOD;
		let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
		if (t < 0) {
			return false;
		}
		t = Math.ceil(t);
		return t;
	}
	return false;
}

module.exports = {
	dateSample
};


// console.log(dateSample('1'));// 22387 (or 22392 depending on formula used)
// console.log(dateSample('WOOT!'));// => false
// console.log(dateSample(-52892));
// console.log(dateSample('9000'));
// console.log(dateSample('3'));

