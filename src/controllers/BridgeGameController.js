const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const Validators = require('../Validators');
const BridgeGame = require('../models/BridgeGame');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');

const bridgeGame = new BridgeGame();

class BridgeGameController {
  start() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
    InputView.readBridgeSize(this.handleInputSize);
  }

  inputSizeHandler = (length) => {
    const bridge = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate
    );
    bridgeGame.setRandomBridge(bridge);
  };

  handleInputSize = (length) => {
    try {
      Validators.isValidLength(length);
      this.inputSizeHandler(length);
      InputView.readMoving(this.handleInputMove);
    } catch (e) {
      Console.print(e);
      InputView.readBridgeSize(this.handleInputSize);
    }
  };

  inputMoveHandler = (block) => {
    bridgeGame.setUserBlock(block);
    const formattedBridges = bridgeGame.move();
    const presentableBridges = bridgeGame.present(formattedBridges);
    bridgeGame.setPresentableBridge(presentableBridges);
    OutputView.printMap(presentableBridges);
    this.inputNextMoveHandler(formattedBridges);
  };

  inputNextMoveHandler = (formattedBridges) => {
    if (bridgeGame.isGameOver(formattedBridges)) {
      if (bridgeGame.isSuccess()) {
        const result = bridgeGame.end();
        OutputView.printResult(result);
      }
      InputView.readGameCommand(this.handleInputCommand);
    } else InputView.readMoving(this.handleInputMove);
  };

  handleInputMove = (block) => {
    try {
      Validators.isValidMove(block);
      this.inputMoveHandler(block);
    } catch (e) {
      Console.print(e);
      InputView.readMoving(this.handleInputMove);
    }
  };

  inputCommandHandler = (command) => {
    if (command === 'Q') {
      this.handleQuit();
    } else this.handleRetry();
  };

  handleQuit = () => {
    const result = bridgeGame.end();
    OutputView.printResult(result);
    bridgeGame.resetRound();
  };

  handleRetry = () => {
    bridgeGame.setRound();
    bridgeGame.retry();
    InputView.readMoving(this.handleInputMove);
  };

  handleInputCommand = (command) => {
    try {
      Validators.isValidCommand(command);
      this.inputCommandHandler(command);
    } catch (e) {
      Console.print(e);
      InputView.readGameCommand(this.handleInputCommand);
    }
  };
}

module.exports = BridgeGameController;
