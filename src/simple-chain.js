const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (typeof value !== "undefined") {
            value = ' ' + value + ' ';
            this.chain.push(`(${value})`);
        } else {
            this.chain.push(`()`);
        }

        return this;
    },
    removeLink(position) {
        if (typeof(position) === 'number' && position % 1 === 0 && position > 0 && position < this.chain.length) {
            this.chain.splice(position - 1, 1);
        } else {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
        return this;
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    reverseChain() {
        this.chain.reverse();
        return this;

    },
    finishChain() {
        final = '';
        for (let i of this.chain) {
            final += "~~" + i.trim();
        }
        this.chain = [];
        return final.slice(2, final.length);

    }
};

module.exports = {
    chainMaker
};