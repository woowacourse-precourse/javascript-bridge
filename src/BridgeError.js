class BridgeError {
    #numbers;
  
    constructor(inputNumbers) {
      this.stringTest(inputNumbers);
      this.valueLength(inputNumbers);
      this.#numbers = inputNumbers;
    }
  
    stringTest(inputValue) {
      if (/[^\d]/g.test(inputValue)) { throw new Error("[ERROR] 문자가 포함 되있습니다."); }
    }

    valueLength(inputValue) {
      if (inputValue < 3 || inputValue > 20) { throw new Error("[ERROR] 3 ~ 20 숫자에 포함되지 않습니다."); }
    }
  }
  
  module.exports = BridgeError;