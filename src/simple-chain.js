const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	constructor() {
		this.Chain = null;
		this.err = null;
	},
	getLength() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		let tmpArr = this.Chain = this.Chain.split('~~');
		return tmpArr.length;
	},
	addLink(value) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here

		if (!value) {
			if (value === null) {
				value = 'null';
			} else if (isNaN(value)) {
				value = 'NaN';
			} else if (value === 0) {
				value = 0;
			} else if (value === false) {
				value = 'false';
			} else {
				value = '( )';
			}
		}

		if (!this.Chain) {
			this.Chain = `( ${value} )`;
		} else {
			this.Chain = this.Chain + `~~( ${value} )`;
		}
		return this;
	},
	removeLink(position) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		position = Number(position);
		if (Number.isInteger(position) && position > 0) {
			let tmpArr = this.Chain = this.Chain.split('~~');
			if (position <= tmpArr.length) {
				tmpArr.splice(position - 1, 1);
				this.Chain = tmpArr.join('~~');
				return this;
			} else {
				this.Chain = null;
				this.err = 1;
				//return this;
				throw new Error("You can't remove incorrect link!");
			}
		} else {
			this.Chain = null;
			this.err = 1;
			//return this;
			throw new Error("You can't remove incorrect link!");
		}
	},
	reverseChain() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		if (this.Chain) {
			this.Chain = this.Chain.split('~~').reverse().join('~~');
		}
		return this;
	},
	finishChain() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		let retStr = this.Chain;
		this.Chain = null;
		return retStr;
	}
};

module.exports = {
	chainMaker
};
