const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	//console.log(typeof members);
	if (!Array.isArray(members)) {
		return false;
	}
	let filretArr = members.filter(elem => typeof elem === "string")
	return filretArr.map(elem => elem.trim()[0].toUpperCase()).sort().join('');
}

module.exports = {
	createDreamTeam
};

// console.log(createDreamTeam(['Matt', ' ann', 'Dmitry', 'Max']));// => 'ADMM'
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));// => 'LOO'

// console.log(createDreamTeam(3));