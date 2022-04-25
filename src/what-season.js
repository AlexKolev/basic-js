const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	//console.log(date.constructor.name);
	//console.log(date);
	if (!date) {
		//throw new UserException("Invalid date!");
		return 'Unable to determine the time of year!';
	}

	try {
		let month = date.toTimeString();//шляпа конечно но не сообразил как различть два объекта :(
		month = date.getMonth();
		if (month === 0 || month === 1 || month === 11) {
			return 'winter';
		}
		if (month === 2 || month === 3 || month === 4) {
			return 'spring';
		}
		if (month === 5 || month === 6 || month === 7) {
			return 'summer';
		}
		if (month === 8 || month === 9 || month === 10) {
			return 'autumn';
		}
	} catch (error) {
		throw new Error('Invalid date!');
		//return 'Invalid date!';
	}


}

module.exports = {
	getSeason
};
// const deeperFakeDate = {
// 	toString() {
// 		return Date.prototype.toString.call(new Date());
// 	},
// 	getMonth() {
// 		return Date.prototype.getMonth.call(new Date());
// 	},
// 	getFullYear() {
// 		return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
// 	},
// 	getDate() {
// 		return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
// 	},
// 	getHours() {
// 		return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
// 	},
// 	getMinutes() {
// 		return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
// 	},
// 	getSeconds() {
// 		return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
// 	},
// 	getMilliseconds() {
// 		return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
// 	},
// 	getDay() {
// 		return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
// 	},
// 	[Symbol.toStringTag]: 'Date'
// };
// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

// const CONSTANTS = {
// 	CORRECT_RESULT_MSG: 'CORRECT',
// 	INCORRECT_RESULT_MSG: 'INCORRECT',
// 	SPECIAL_PROP_VALUE: 'SP_NI'
// };
// const { SPECIAL_PROP_VALUE, CORRECT_RESULT_MSG, INCORRECT_RESULT_MSG } = CONSTANTS;
// getSeason(new Date(2020, 02, 31));
// getSeason(new Date(13));
// try {
// 	console.log(getSeason(deeperFakeDate));
// } catch (err) {
// 	console.log(err._specialProp);
// 	console.log(err.message);
// 	if (err._specialProp === SPECIAL_PROP_VALUE) {
// 		console.log(1);
// 	} else if (err.message === 'Invalid date!') {
// 		console.log(2);
// 	}
// }
