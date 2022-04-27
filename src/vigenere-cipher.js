const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(a) {
		if (a === false) {
			this.stright = false;
		} else {
			this.stright = true;
		}

	}
	encrypt(plaintext, key) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		function getLetter(x, y) {
			let a = x.charCodeAt(0);
			let b = y.charCodeAt(0);
			let codeA = 'A'.charCodeAt(0)
			let codeZ = 'Z'.charCodeAt(0)
			let codeLetter = a + (b - codeA)
			if (codeLetter > codeZ) {
				codeLetter = codeLetter - 90 - 1 + codeA;
			}
			return String.fromCharCode(codeLetter);
		}

		if (plaintext === undefined || key === undefined) {
			throw Error('Incorrect arguments!');
		}

		let plaintextArr = [...plaintext.toUpperCase()];
		let keyArr = [...key.toUpperCase()];
		let encryptArr = [];
		let encryptArrUndex = 0;

		for (let index = 0; index < plaintextArr.length; index++) {
			const element = plaintextArr[index];
			if (/[A-Z]/.test(element)) {
				if (encryptArrUndex >= keyArr.length) {
					//	encryptArr[index] = getLetter(element, keyArr[encryptArrUndex]);
					encryptArrUndex = 0;
				}
				// else {
				// 	encryptArrUndex = 0;
				// 	//encryptArr[index] = getLetter(element, keyArr[encryptArrUndex]);
				// }
				encryptArr[index] = getLetter(element, keyArr[encryptArrUndex]);
				encryptArrUndex++;
			} else { encryptArr[index] = element; }
		}
		if (this.stright) {
			return encryptArr.join('');
		}
		return encryptArr.reverse().join('');
	}
	decrypt(plaintext, key) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		function getLetter(x, y) {
			let a = x.charCodeAt(0);
			let b = y.charCodeAt(0);
			let codeA = 'A'.charCodeAt(0)
			let codeZ = 'Z'.charCodeAt(0)
			let codeLetter = a - b + codeA;
			if (codeLetter < codeA) {
				codeLetter = codeLetter + 26;
			}
			return String.fromCharCode(codeLetter);
		}
		if (plaintext === undefined || key === undefined) {
			throw Error('Incorrect arguments!');
		}
		let plaintextArr = [...plaintext.toUpperCase()];
		let keyArr = [...key.toUpperCase()];
		let encryptArr = [];
		let encryptArrUndex = 0;

		for (let index = 0; index < plaintextArr.length; index++) {
			const element = plaintextArr[index];
			if (/[A-Z]/.test(element)) {
				if (encryptArrUndex >= keyArr.length) {
					//encryptArr[index] = getLetter(element, keyArr[encryptArrUndex]);
					encryptArrUndex = 0;
				}
				// else {
				// 	encryptArrUndex = 0;
				// 	//encryptArr[index] = getLetter(element, keyArr[encryptArrUndex - keyArr.length]);
				// }
				encryptArr[index] = getLetter(element, keyArr[encryptArrUndex]);
				encryptArrUndex++;
			} else { encryptArr[index] = element; }
		}
		if (this.stright) {
			return encryptArr.join('');
		}
		return encryptArr.reverse().join('');
	}
}

module.exports = {
	VigenereCipheringMachine
};

const directMachine = new VigenereCipheringMachine();

// const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'));
//, 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.')
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
// //=> 'AEIHQX SX DLLU!'

// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));;
// // => 'ATTACK AT DAWN!'

// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));
// // => '!ULLD XS XQHIEA'

// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
// // => '!NWAD TA KCATTA'