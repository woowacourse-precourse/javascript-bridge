class BridgeError {
    #numbers;
  
    constructor(inputNumbers) {
      this.stringTest(inputNumbers);
      this.#numbers = inputNumbers;
    }
  
    stringTest(inputValue) {
      if (/[^\d]/g.test(inputValue)) { throw new Error("[ERROR] 문자가 포함 되있습니다."); }
    }
  }
  
  module.exports = BridgeError;