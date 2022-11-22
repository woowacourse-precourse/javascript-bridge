const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const ConstValues = require('./ConstValues');

class App {
  play() {
    OutputView.printStart()
    InputView.readBridgeSize(this.afterReadBridgeSize);
  }

  afterReadBridgeSize(bridgeLength = 0) {
    let bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    
    InputView.readMoving(new BridgeGame(bridge, ConstValues.FIRST_GAME));
  }
}


module.exports = App;
