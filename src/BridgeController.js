const BridgeGame = require('./BridgeGame');
const { checkRetryBridge } = require('./validation/bridgeValidation');
const { checkRetryMoving } = require('./validation/movingValidation');
const { checkRetryCommand } = require('./validation/commandValidation');
const { generate } = require('./utils/BridgeRandomNumberGenerator');
const { print } = require('./utils/MissionUtils');

class BridgeController {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.inputView = require('./InputView');
    this.bridgeMaker = require('./BridgeMaker');
    this.#initPrint();
  }

  #initPrint() {
    print('다리 건너기 게임을 시작합니다.');
  }

  progressSize() {
    this.inputView.readBridgeSize((input) => {
      if (!checkRetryBridge(input)) {
        return this.progressSize();
      }

      this.setBridgeGameList(input);
      return this.progressMoving();
    });
  }

  progressMoving() {
    this.inputView.readMoving((input) => {
      if (!checkRetryMoving(input)) {
        return this.progressMoving();
      }
    });
  }

  progressCommand() {
    this.inputView.readGameCommand((input) => {
      if (!checkRetryCommand(input)) {
        return this.progressCommand();
      }
    });
  }

  setBridgeGameList(input) {
    const bridgeList = this.bridgeMaker.makeBridge(Number(input), generate);
    this.bridgeGame.setBridgeList(bridgeList);
  }
}

module.exports = BridgeController;
