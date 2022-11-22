const BridgeGame = require('./BridgeGame');
const { checkRetryBridge } = require('./validation/bridgeValidation');
const { checkRetryMoving } = require('./validation/movingValidation');
const { checkRetryCommand } = require('./validation/commandValidation');
const { generate } = require('./utils/BridgeRandomNumberGenerator');
const { print } = require('./utils/MissionUtils');
const { INPUT_TEXT } = require('./constant/contant');

/**
 * 다리 건너기 게임을 진행하는 클래스
 */
class BridgeController {
  constructor() {
    this.bridgeGame = new BridgeGame(
      () => this.progressMoving(),
      () => this.progressCommand()
    );

    this.inputView = require('./InputView');
    this.bridgeMaker = require('./BridgeMaker');

    this.#initPrint();
  }

  #initPrint() {
    print(INPUT_TEXT.GAME_START);
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

      this.bridgeGame.progress(input);
    });
  }

  progressCommand() {
    this.inputView.readGameCommand((input) => {
      if (!checkRetryCommand(input)) {
        return this.progressCommand();
      }

      this.bridgeGame.progress(input);
    });
  }

  setBridgeGameList(input) {
    const bridgeList = this.bridgeMaker.makeBridge(Number(input), generate);
    this.bridgeGame.setBridgeList(bridgeList);
  }
}

module.exports = BridgeController;
