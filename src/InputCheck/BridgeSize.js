const Base = require('./Base');

class BridgeSize extends Base {
  constructor(inputValue) {
    super(inputValue);
  }
  checkInput() {
    super.checkOnlyNumber();
    super.checkCorrectNumberRange();
    return super.checkNumberLength();
  }
}

module.exports = BridgeSize;
