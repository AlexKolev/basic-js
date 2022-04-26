const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
	--discard-next excludes the next element of the array from the transformed array.
	--discard-prev excludes the previous element of the array from the transformed array.
	--double-next duplicates the next element of the array in the transformed array.
	--double-prev duplicates the previous element of the array in the transformed array.
 */
function transform(arr) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}
	let retArr = [];
	//console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--discard-next':
				if (i + 1 < arr.length - 1) {
					let toDel = 0;

					if (arr[i + 1] != '--discard-next' && arr[i + 1] != '--discard-prev' && arr[i + 1] != '--double-next' && arr[i + 1] != '--double-prev') {
						i++;
					} else {
						while (arr[i + 1] == '--discard-next' || arr[i + 1] == '--discard-prev' || arr[i + 1] == '--double-next' || arr[i + 1] == '--double-prev') {
							if (arr[i + 1] == '--discard-next') {
								toDel++;
							}
							i++;
						}

						i = i + 1 + toDel;
					}

					retArr.push(null);
				}
				break;
			case '--discard-prev':
				if (retArr.length != 0) {
					retArr.pop();
				}
				break;
			case '--double-next':
				if (i + 1 < arr.length) {
					retArr.push(arr[i + 1]);
				}
				break;
			case '--double-prev':
				if (retArr.length != 0) {
					retArr.push(retArr[retArr.length - 1]);
				}
				break;
			default:
				retArr.push(arr[i]);
		}
	}
	return retArr.filter(element => element);
}

module.exports = {
	transform
};
let a = ['--double-next', 1];
console.log(transform(a));
// let a = [1, 2, 3, '--double-next', 4, 5];
// console.log(transform(a)); //=> [1, 2, 3, 4, 4, 5]

// a = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]; //output: [1, 2, 3, 4, 5]
// console.log(transform(a));

// a = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5] //output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
// console.log(transform(a));

// a = [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]; //output: [1, 2, 3, 4, 5]
// console.log(transform(a));

// a = [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5] //output: [1, 2, 3, 1337, 4, 5]
// console.log(transform(a));

// //console.log(a);
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5])); //=> [1, 2, 4, 5]

// a = [5]  //output: [ 1, 2, 3 ]
// console.log(transform(a));
