const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	let str = '' + n;
	//console.log(str.split(''));
	n = str.split('').reduce((a, b) => +a + +b, 0);

	//console.log(n);
	str = '' + n;
	if (str.length > 1) {
		n = getSumOfDigits(n);
	}
	return n;
}

module.exports = {
	getSumOfDigits
};

console.log(getSumOfDigits(100));
//=> 1

console.log(getSumOfDigits(91));
// => 1