const ConstValue = require('./ConstValue');
const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    try {
      OutputView.printStartMessage();
      const bridgeGame = this.makeBridgeGame();
      const [isSuccess, gamePlayCount] = this.executeGame(bridgeGame);
      OutputView.printResult(isSuccess, gamePlayCount, bridgeGame);
    } catch (error) {
      Console.print(error.message);
    }
  }

  makeBridgeGame() {
    const bridgeSize = InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);

    return new BridgeGame(bridge);
  }

  executeGame(bridgeGame) {
    let continueGameCheck = true;
    let gamePlayCount = 0;
    let isSuccess;
    while (continueGameCheck) {
      gamePlayCount += 1;
      isSuccess = this.executeTry(bridgeGame);
      continueGameCheck = this.checkRetry(bridgeGame, isSuccess);
    }

    return [isSuccess, gamePlayCount];
  }

  executeTry(bridgeGame) {
    let lastTrySuccess = true;
    let tryCountValidate = this.checkTryCountValidation(bridgeGame);

    while (lastTrySuccess && tryCountValidate) {
      lastTrySuccess = this.executeMove(bridgeGame);
      OutputView.printMap(bridgeGame, lastTrySuccess);
      tryCountValidate = this.checkTryCountValidation(bridgeGame);
    }

    return lastTrySuccess;
  }

  checkTryCountValidation(bridgeGame) {
    if (bridgeGame.tryCountGetter() < bridgeGame.bridgeGetter().length) {
      return true;
    }

    return false;
  }

  executeMove(bridgeGame) {
    const moveDirection = InputView.readMoving();
    const turnPass = bridgeGame.move(moveDirection);
    return turnPass;
  }

  checkRetry(bridgeGame, isSuccess) {
    if (isSuccess) {
      return false;
    }

    const command = InputView.readGameCommand();
    const isContinue = bridgeGame.retry(command);
    return isContinue;
  }
}

module.exports = App;
