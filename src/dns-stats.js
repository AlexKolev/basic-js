const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	let dnsList = {};
	for (const iterator of domains) {
		iterator.split('.').reverse().reduce((previousValue, currentValue) => {
			//console.log(previousValue + '.' + currentValue);
			if (!dnsList.hasOwnProperty(previousValue + '.' + currentValue)) {
				dnsList[previousValue + '.' + currentValue] = 1;
			} else {
				dnsList[previousValue + '.' + currentValue]++;
			}
			return (previousValue + '.' + currentValue);
		}, '');
	}
	return dnsList;
}

module.exports = {
	getDNSStats
};

console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));