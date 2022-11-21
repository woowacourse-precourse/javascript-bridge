class BridgeError {
    #numbers;
  
    constructor(inputNumbers) {
      this.stringTest(inputNumbers);
      this.valueLength(inputNumbers);
      this.#numbers = inputNumbers;
    }
  
    stringTest(inputValue) {
      if (/[^\d]/g.test(inputValue)) { throw "[ERROR] 문자가 포함 되있습니다."; }
    }

    valueLength(inputValue) {
      if (inputValue < 3 || inputValue > 20) {throw "[ERROR] 3 ~ 20 숫자에 포함되지 않습니다."; }
    }
  }

  class MoveError {
    #strings

    constructor(inputString) {
      this.stringTest(inputString);
      this.#strings = inputString;
    }

    stringTest(inputValue) {
      if (/[^U^D]/g.test(inputValue)) { throw "[ERROR] U와 D 외의 문자는 사용할 수 없습니다."; }
    }

  }

  class SelectOptionError {
    #strings

    constructor(inputString) {
      this.stringTest(inputString);
      this.#strings = inputString;
    }

    stringTest(inputValue) {
      if (/[^Q^R]/g.test(inputValue)) { throw "[ERROR] Q와 R 외의 문자는 사용할 수 없습니다."; }
    }
  }
  
  exports.BridgeError = BridgeError;
  exports.MoveError = MoveError;
  exports.SelectOptionError = SelectOptionError;