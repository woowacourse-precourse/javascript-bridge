const { ERROR_MESSAGES } = require('./Constant');

const Validator = Object.freeze({
  spaceReg: /\s/g,

  checkSpace(input) {
    const trimedInput = input.trim();
    if (trimedInput.match(this.spaceReg)) throw new Error(ERROR_MESSAGES.NOT_EMPTY);
  },
});

module.exports = Validator;

console.log(Validator.checkSpace('   sa d '));
