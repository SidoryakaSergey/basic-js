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
  constructor(straight = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numberAlph = {};
    this.straight = straight;
    for (let i = 0; i < this.alphabet.length; i++) {
      this.numberAlph[this.alphabet[i]] = i;
    }
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptMessage = '';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        encryptMessage +=
          this.alphabet[
            (this.numberAlph[message[i]] +
              this.numberAlph[key[keyIndex % key.length]]) %
              this.alphabet.length
          ];
        keyIndex++;
      } else {
        encryptMessage += message[i];
      }
    }
    return this.straight
      ? encryptMessage
      : encryptMessage.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptMessage = '';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        encryptMessage +=
          this.alphabet[
            (this.numberAlph[message[i]] -
              this.numberAlph[key[keyIndex % key.length]] +
              this.alphabet.length) %
              this.alphabet.length
          ];
        keyIndex++;
      } else {
        encryptMessage += message[i];
      }
    }
    return this.straight
      ? encryptMessage
      : encryptMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
