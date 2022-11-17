class Validation {
    // #numbers;
  
    constructor(size) {
      this.validateBridgeSize(size);
    //   this.#numbers = numbers;
    }
  
    validateBridgeSize(size) {
      if (size < 3 || size > 20) {
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
      }
    //   const setanswer = new Set(answer);
    //   if (answer.length !== setanswer.size) {
    //     throw new Error("[ERROR] 중복되지 않는 번호를 입력해 주세요.");
    //   }
    //   const regExp = new RegExp("^[0-9]+$");
    //   if (answer.filter((element) => !regExp.test(element)).length !== 0) {
    //     throw new Error("[ERROR] 숫자만 입력해 주세요.");
    //   }
    //   if (answer.filter((element) => element < 1 || element > 45).length !== 0) {
    //     throw new Error("[ERROR] 1부터 45까지의 숫자만 입력해 주세요.");
    //   }
    }
  }
  
  module.exports = Validation;
  