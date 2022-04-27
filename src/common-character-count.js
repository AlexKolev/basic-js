const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	let s1Arr = [...s1];
	let s2Arr = [...s2];
	let count = 0;
	for (const iterator of s1Arr) {
		let idx;
		idx = s2Arr.findIndex((element, index, array) => element === iterator);
		if (idx >= 0) {
			count++;
			s2Arr.splice(idx, 1);
		}
	}
	return count;
}

module.exports = {
	getCommonCharacterCount
};
console.log(getCommonCharacterCount('aabcc', 'adcaa'));