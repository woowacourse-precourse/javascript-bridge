const { RETRY_COMMAND } = require("../constants");

class RetryValidation {
  constructor(input) {
    this.validate(input);
  }

  validate(input) {
    const values = Object.values(RETRY_COMMAND);
    if (!values.includes(input)) throw "[ERROR] R또는 Q로 입력해주세요";
  }
}

module.exports = RetryValidation;
