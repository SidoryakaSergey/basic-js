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
  constructor(straight) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numberAlph = {};

    for (let i = 0; i < this.alphabet.length; i++) {
      this.numberAlph[this.alphabet[i]] = i;
    }
  }
  encrypt(mesage, key) {
    let encryptMessage = '';

    for (let i = 0; i < mesage.length; i++) {
      encryptMessage +=
        this.alphabet[
          (this.numberAlph[mesage[i]] + this.numberAlph[key[i % key.length]]) %
            this.alphabet.length
        ];
    }
    return encryptMessage;
  }
  decrypt() {
    let encryptMessage = '';

    for (let i = 0; i < mesage.length; i++) {
      encryptMessage +=
        this.alphabet[
          (this.numAlph[mesage[i]] -
            this.numberAlph[key[i % key.length]] +
            this.alphabet.length) %
            this.alphabet.length
        ];
    }
    return encryptMessage;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
