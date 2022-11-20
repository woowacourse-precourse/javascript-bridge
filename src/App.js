const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const {
  START_GAME_MSG,
  BRIDGE_SIZE_ERROR,
  MIN_BRIDGE_SIZE,
  MAX_BRIDGE_SIZE,
} = require('./constants');

class App {
  play() {
    OutputView.printGuide(START_GAME_MSG);
  }

  isValidBridgeSize(bridgeSize) {
    if (
      isNaN(bridgeSize) ||
      bridgeSize < MIN_BRIDGE_SIZE ||
      bridgeSize > MAX_BRIDGE_SIZE ||
      bridgeSize === ''
    ) {
      throw new Error(BRIDGE_SIZE_ERROR);
    }
  }
}

const app = new App();
app.play();
module.exports = App;
