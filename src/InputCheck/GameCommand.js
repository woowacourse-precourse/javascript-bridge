const Base = require('./Base');

class GameCommand extends Base {
  checkInput() {
    super.checkROrQ();
    return super.checkLength();
  }
}

module.exports = GameCommand;
