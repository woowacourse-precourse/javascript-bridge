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
    const regExp = new RegExp("^[0-9]+$");
    if (size.filter((element) => !regExp.test(element)).length !== 0) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }
  }
  validateMove(block){

  }
  validateCommand(answer){
    
  }
}

module.exports = Validation;
