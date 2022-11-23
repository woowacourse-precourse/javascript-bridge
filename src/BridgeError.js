const constant = require('./constant');

class BridgeError {
    #numbers;
  
    constructor(inputNumbers) {
      this.stringTest(inputNumbers);
      this.valueLength(inputNumbers);
      this.#numbers = inputNumbers;
    }
  
    stringTest(inputValue) {
      if (/[^\d]/g.test(inputValue)) { throw constant.ERROR.CONTAIN_STRING; }
    }

    valueLength(inputValue) {
      if (inputValue < constant.CONTAIN_LOW || inputValue > constant.CONTAIN_HIGH) {throw constant.ERROR.NOT_CONTAIN_NUMBER; }
    }
  }

  class MoveError {
    #strings

    constructor(inputString) {
      this.stringTest(inputString);
      this.#strings = inputString;
    }

    stringTest(inputValue) {
      if (/[^U^D]/g.test(inputValue)) { throw constant.ERROR.NOT_CONTAIN_U_D; }
    }

  }

  class SelectOptionError {
    #strings

    constructor(inputString) {
      this.stringTest(inputString);
      this.#strings = inputString;
    }

    stringTest(inputValue) {
      if (/[^Q^R]/g.test(inputValue)) { throw constant.ERROR.NOT_CONTAIN_Q_R; }
    }
  }
  
  exports.BridgeError = BridgeError;
  exports.MoveError = MoveError;
  exports.SelectOptionError = SelectOptionError;