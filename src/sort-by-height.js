const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	let arrForSort = arr.filter(e => e > 0).sort((a, b) => a - b);
	//console.log(arrForSort);
	//console.log(arr);
	let i = 0;
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] > 0) {
			arr[index] = arrForSort[i];
			i++;
		}

	}
	return arr;
}

module.exports = {
	sortByHeight
};

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// => [-1, 150, 160, 170, -1, -1, 180, 190]