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
//[1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])
class DepthCalculator {
	// constructor() {
	// 	this.depth = 0;
	// 	this.tmpDepth = 0;
	// }
	calculateDepth(arr) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		let maxdepth = 0;
		//let depth = 1;
		if (!Array.isArray(arr)) {
			return;
		}
		//++depth;
		//this.tmpDepth++;
		arr.forEach((el) => {
			//let depth = 1;
			if (Array.isArray(el)) {
				let depth = this.calculateDepth(el);
				if (maxdepth < depth) {
					maxdepth = depth;
				}
				//maxdepth += this.calculateDepth(el);
				// } else {
				// 	// if (this.depth < this.tmpDepth) {
				// 	// 	this.depth = this.tmpDepth;
				// 	// 	this.tmpDepth = 1;
				// 	// }
				// 	return depth;
				// 
			}
		});
		// if (maxdepth < depth) {
		// 	maxdepth = depth;
		// }
		return maxdepth + 1;
		calculateDepth(arr);
		return ++depth;

		// function makeLineArr(arrDepth) {
		// 	arrDepth.forEach((el) => {
		// 		if (Array.isArray(el)) {
		// 			depth++;
		// 			makeLineArr(el);
		// 		} else {
		// 			return depth;
		// 		}
		// 	});
		// 	return depth;
		// }
		// if (!Array.isArray(arr)) {
		// 	return false;
		// }
		// makeLineArr(arr);
		// return ++depth;
	}
}

module.exports = {
	DepthCalculator
};

const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5])); //=> 1
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));// => 2
console.log(depthCalc.calculateDepth([[[]]]));// => 3
console.log(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []])); //3
console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]))// 5)