const { UP_AND_DOWN } = require("../constants");

class MovingValidation {
  constructor(input) {
    this.validate(input);
  }

  validate(input) {
    const values = Object.values(UP_AND_DOWN);
    if (!values.includes(input)) throw "[ERROR] U또는 D로 입력해주세요";
  }
}

module.exports = MovingValidation;
