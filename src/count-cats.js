const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	let retCount = 0;
	for (const matrixCol of matrix) {
		for (const ceil of matrixCol) {
			if (ceil === '^^') {
				retCount++;
			}
		}
	}
	return retCount;
}

module.exports = {
	countCats
};

// console.log(countCats([
// 	[0, 1, '^^'],
// 	[0, '^^', 2],
// 	['^^', 1, 2]
// ]));