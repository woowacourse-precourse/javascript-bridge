class Validator {
  #errorMessage = '[ERROR] 에러 메세지를 출력하세요.';

  validate() {
    throw new Error(this.#errorMessage);
  }
}

module.exports = Validator;
