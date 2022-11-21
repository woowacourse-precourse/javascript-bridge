// run `node index.js` in the terminal
const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const FIRST_GAME = 1;

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.afterReadBridgeSize);
  }

  afterReadBridgeSize(bridgeLength = 0) {
    //bridgeLength exception 만들기

    let bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );

    InputView.readMoving(new BridgeGame(bridge, FIRST_GAME));
  }
}

const app = new App();
app.play();

module.exports = App;