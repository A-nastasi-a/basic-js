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
    constructor(type = true) {
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.type = type;
        this.table = [];
        for (let i = 0; i < this.alphabet.length; i++) {
            this.table.push(this.alphabet.slice(i, this.alphabet.length) + this.alphabet.slice(0, i));
        }
    }


    encrypt(string, key) {


        let finalString = "";
        if (typeof string == 'undefined' || typeof key == 'undefined') {
            throw new Error("Incorrect arguments!");
        }
        string = string.toUpperCase();
        while (string.length > key.length) {
            key += key;
        }
        key = key.toUpperCase().split('');
        for (let i = 0; i < string.length; i++) {
            if (this.alphabet.indexOf(string[i]) < 0) {
                key.splice(i, 0, string[i]);
            }
        }
        key = key.join('');
        for (let i = 0; i < string.length; i++) {

            let col = this.alphabet.indexOf(string[i]);
            let row = this.alphabet.indexOf(key[i]);

            if (row >= 0 && col >= 0) {
                finalString += this.table[row][col];
            } else {
                finalString += string[i];
            }

        }
        if (this.type == false) {
            finalString = finalString.split('').reverse();
            return finalString.join('');
        }
        return finalString;
    }


    decrypt(encryptedMessage, key) {
        let finalString = "";
        if (typeof encryptedMessage == 'undefined' || typeof key == 'undefined') {
            throw new Error("Incorrect arguments!");
        }
        encryptedMessage = encryptedMessage.toUpperCase();
        while (encryptedMessage.length > key.length) {
            key += key;
        }
        key = key.toUpperCase().split('');
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (this.alphabet.indexOf(encryptedMessage[i]) < 0) {
                key.splice(i, 0, encryptedMessage[i]);
            }
        }
        key = key.join('');


        for (let i = 0; i < encryptedMessage.length; i++) {
            let row = this.alphabet.indexOf(key[i]);

            if (row >= 0) {
                let stringA = this.table[row];
                let col = stringA.indexOf(encryptedMessage[i]);
                if (col >= 0) {
                    finalString += this.alphabet[col];
                }

            } else {
                finalString += encryptedMessage[i];
            }
        }
        if (this.type == false) {
            finalString = finalString.split('').reverse();
            return finalString.join('');
        }
        return finalString;
    }
}

module.exports = {
    VigenereCipheringMachine
};