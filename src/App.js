const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');
const { validateBridge, validateMove, validateRetry } = require('./utils/validate');

class App {
  constructor() {
    this.bridgeGame = null;
  }

  play() {
    Console.print('다리 건너기 게임을 시작합니다.');
    InputView.readBridgeSize(this.getBridgeSizeInput.bind(this));
  }

  getBridgeSizeInput(size) {
    validateBridge(size);
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.bridgeGame = new BridgeGame(bridge);
    console.log(bridge);
    InputView.readMoving(this.getMoveInput.bind(this));
  }

  getMoveInput(move) {
    validateMove(move);
    this.playGame(move);
  }

  getRetry(answer) {
    validateRetry(answer);
    if (answer === 'Q') {
      Console.close();
      return;
    }
    this.bridgeGame.retry(answer);
    InputView.readMoving(this.getMoveInput.bind(this));
  }

  playGame(move) {
    this.bridgeGame.move(move);

    if (this.bridgeGame.isFail(move)) {
      InputView.readGameCommand(this.getRetry.bind(this));
      return;
    }
    InputView.readMoving(this.getMoveInput.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
