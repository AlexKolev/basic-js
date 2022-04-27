const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	let nArr = [...n + ''];
	let copynArr = nArr.slice()
	let numberMax = 0;
	//console.log(nArr);
	//console.log(copynArr);
	for (let i = 0; i < copynArr.length; i++) {
		nArr.splice(i, 1);
		if (numberMax < +nArr.reduce((previousValue, currentValue) => previousValue + currentValue)) {
			numberMax = +nArr.reduce((previousValue, currentValue) => previousValue + currentValue);
		}
		//console.log(numberMax);
		nArr = copynArr.slice();
	}
	return numberMax;
}

module.exports = {
	deleteDigit
};

console.log(deleteDigit(152));
// => 52