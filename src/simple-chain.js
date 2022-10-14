const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
    getLength() {
        // return this.chain.length;
        throw new NotImplementedError('Not implemented');
    },
    addLink(value = 0) {
        // if (value != 0) {
        //     this.chain.push(` (${value}) `);
        // } else {
        //     this.chain.push(`()`);
        // }
        // this.chain.push(`~~`);
        // return this;
        throw new NotImplementedError('Not implemented');
    },
    removeLink(position) {
        throw new NotImplementedError('Not implemented');
        // if (typeof(position) != 'number' || Math.round(position) != position) {
        //     throw new Error("You can't remove incorrect link!");
        // } else {
        //     // for (let i = 0; i < this.chain; i++) {
        //     //     if (this.chain.indexOf(String(position)) >= 0) {
        //     //         this.chain.splice(i, 1);
        //     //     }
        //     // }
        //     this.chain.splice(position - 1, 1);
        // }
        // try {
        //     this.achin[position];

        // } catch {
        //     throw new Error("You can't remove incorrect link!");
        // }
        // if (typeof position !== 'number' || Math.round(position) !== position) {
        //     throw new Error("You can't remove incorrect link!");
        // }


        // return this;
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    reverseChain() {
        // this.chain = this.chain.reverse();
        // return this;
        throw new NotImplementedError('Not implemented');

    },
    finishChain() {
        throw new NotImplementedError('Not implemented');
        // final = '';
        // for (let i of this.chain) {
        //     final += i.trim();
        // }
        // return final;

    }
};

module.exports = {
    chainMaker
};