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
    console.log('this.straight =', this.straight);
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        encryptMessage +=
          this.alphabet[
            (this.numberAlph[message[i]] +
              this.numberAlph[key[i % key.length]]) %
              this.alphabet.length
          ];
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
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        encryptMessage +=
          this.alphabet[
            (this.numberAlph[message[i]] -
              this.numberAlph[key[i % key.length]] +
              this.alphabet.length) %
              this.alphabet.length
          ];
      } else {
        encryptMessage += message[i];
      }
    }
    return this.straight
      ? encryptMessage
      : encryptMessage.split('').reverse().join('');
  }
}

// const code = new VigenereCipheringMachine();

// console.log(code.encrypt('attack at dawn!', 'alphonse'));
// console.log(code.decrypt('AEIHQX ET SHKA!', 'alphonse'));

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Incorrect arguments!');
  }
  const newArr = [...arr];
  let index = 0;
  do {
    if (isNaN(arr[index])) {
      switch (arr[index]) {
        case '--discard-next':
          if (index === arr.length - 1) {
            newArr[index] = '';
          } else {
            newArr[index] = '';
            newArr[index + 1] = '';
          }
          break;
        case '--discard-prev':
          if (index === 0) {
            newArr[index] = '';
          } else {
            newArr[index] = '';
            newArr[index - 1] = '';
          }
          break;
        case '--double-next':
          if (index === arr.length - 1) {
            newArr[index] = '';
          } else {
            newArr[index] = newArr[index + 1];
          }
          break;
        case '--double-prev':
          if (index === 0) {
            newArr[index] = '';
          } else {
            newArr[index] = newArr[index - 1];
          }
          break;
      }
    }
    index++;
  } while (index < arr.length);
  return newArr.filter(el => {
    return el !== '';
  });
}

console.log(transform([1, '--discard-next', 2, 3, '--discard-next', 5, 6]));
