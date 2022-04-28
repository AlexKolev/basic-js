const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	let retMatrix = [];
	for (let i = 0; i < matrix.length; i++) {
		retMatrix[i] = []
		for (let j = 0; j < matrix[0].length; j++) {
			const item = matrix[i][j];
			retMatrix[i][j] = 0;
			if (i > 0) {
				if (j > 0) {
					if (matrix[i - 1][j - 1] === true) { retMatrix[i][j]++ }
				}
				if (matrix[i - 1][j] === true) { retMatrix[i][j]++ }
				if (matrix[i - 1][j + 1] === true) { retMatrix[i][j]++ }
			}

			if (j > 0) {
				if (matrix[i][j - 1] === true) { retMatrix[i][j]++ }
			}
			if (matrix[i][j + 1] === true) { retMatrix[i][j]++ }
			if (i < matrix.length - 1) {
				if (j > 0) {
					if (matrix[i + 1][j - 1] === true) { retMatrix[i][j]++ }
				}
				if (matrix[i + 1][j] === true) { retMatrix[i][j]++ }
				if (matrix[i + 1][j + 1] === true) { retMatrix[i][j]++ }
			}

			// if (i===0){
			// 	if (j === 0){

			// 	}else if (j===matrix[0].length-1){

			// 	}else{}
			// }
		}
	}
	return retMatrix;
}

module.exports = {
	minesweeper
};

const matrix = [
	[true, false, false],
	[false, true, false],
	[false, false, false]
];

console.log(minesweeper(matrix));
//    => [
// 	[1, 2, 1],
// 	[2, 1, 1],
// 	[1, 1, 1]
//    ];