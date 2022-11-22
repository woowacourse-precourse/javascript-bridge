const ConstValue = require('./ConstValue');
const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
class App {
  constructor() {
    this.bridgeArray = [' ', ' '];
    this.gameStatus = true;
    this.moveCount = 0;
  }
  play() {
    OutputView.printStartMessage();
    // const bridgeSize = InputView.readBridgeSize();
    // const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    // console.log('bridgeSize:' + bridgeSize);
    // console.log('bridge' + bridge);
    // const bridgeGame = new BridgeGame(bridge);
    // while (this.gameStatus) {
    //   let restartCheck = this.gameRotate(bridge, bridgeGame);
    //   if (restartCheck === 'P' || restartCheck === 'Q') {
    //     this.checkRestart(restartCheck, bridgeGame);
    //   }
    // }
  }

  makeBridge() {
    const bridgeSize = InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);

    return bridge;
  }
}

module.exports = App;
