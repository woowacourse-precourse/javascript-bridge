const Script = require("./Script");

const Validation = {
  inputNumber(num) {
    if (num < 3 || num > 20) throw `${Script.INPUTNUMBERERROR}`;
  }
}

module.exports = Validation;
