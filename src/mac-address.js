const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	if (/^[0-9A-F]{2}(-[0-9A-F]{2}){5}$/.test(n)) {
		return true;
	}
	return false;
	/*
		let arrN = n.split('-');
		//console.log(arrN);
		if (arrN.length != 6) {
			return false;
		}
		for (const iterator of arrN) {
			if (iterator.length != 2) {
				return false;
			}
		}
		return true;*/
}
module.exports = {
	isMAC48Address
};

isMAC48Address('00-1B-63-84-45-E6');
