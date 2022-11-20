const InputView = require('./InputView.js');

/**
 * 플레이어를 관리하는 클래스
 */
class Player {
  constructor() {}

  askBridgeSize(makeBridge) {
    return InputView.readBridgeSize(makeBridge);
  }
}

module.exports = Player;
