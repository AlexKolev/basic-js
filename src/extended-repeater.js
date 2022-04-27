const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	let retSrt = '';
	retSrt += str;

	let makeAddition = '';


	if (options.hasOwnProperty('addition')) {
		makeAddition += options.addition;
		if (options.additionRepeatTimes && options.additionRepeatTimes > 0) {
			for (let i = 2; i <= options.additionRepeatTimes; i++) {
				if (options.additionSeparator) {
					makeAddition = makeAddition + options.additionSeparator + options.addition;
				} else {
					makeAddition = makeAddition + '|' + options.addition;
				}
			}
		}
	}
	retSrt += makeAddition;
	if (options.repeatTimes && options.repeatTimes > 0) {
		for (let i = 2; i <= options.repeatTimes; i++) {
			if (options.separator) {
				retSrt = retSrt + options.separator + (str + makeAddition);
			} else {
				retSrt = retSrt + '+' + (str + makeAddition);
			}
		}
	}
	return retSrt;
}

module.exports = {
	repeater
};

console.log(repeater('la', { repeatTimes: 3 }));


console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }));
//, 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
//   truefalse!!!false??? truefalse!!!false??? truefalse!!!false
console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));
//, 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');
//	 nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null