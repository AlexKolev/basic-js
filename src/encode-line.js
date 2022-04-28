const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	console.log();
	let strArr = [...str];
	let retArr = [];
	let retArrIndex = 0;
	let countLetter = 1;
	//retArr.push
	for (let index = 0; index < strArr.length; index++) {
		const element = strArr[index];
		if (element === strArr[index + 1]) {
			countLetter++
		} else {
			if (countLetter > 1) {
				retArr.push(countLetter + element)
			} else {
				retArr.push(element)
			}

			countLetter = 1;
		}
	}
	// console.log([...str].reduce((previousValue, currentValue) => {
	// 	//console.log(previousValue);
	// 	console.log(currentValue);
	// 	return currentValue;
	// }, '')
	// );
	return retArr.join('');
}

module.exports = {
	encodeLine
};

console.log(encodeLine('aabbbc'));// => '2a3bc'