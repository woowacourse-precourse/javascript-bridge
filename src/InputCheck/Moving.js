const Base = require('./Base');

class Moving extends Base {
  checkInput() {
    super.checkUOrD();
    return super.checkLength();
  }
}

module.exports = Moving;
