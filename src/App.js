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

  makeBridgeGame() {
    try {
      const bridge = this.makeBridge();
      return new BridgeGame(bridge);
    } catch (error) {
      Console.print('[ERROR] ' + error);
      return this.makeBridgeGame();
    }
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
    try {
      const moveDirection = InputView.readMoving();
      const turnPass = bridgeGame.move(moveDirection);
      return turnPass;
    } catch (error) {
      Console.print('[ERROR] ' + error);
      return this.executeMove(bridgeGame);
    }
  }

  checkRetry(bridgeGame, isSuccess) {
    if (isSuccess) {
      return false;
    }

    try {
      const command = InputView.readGameCommand();
      const isContinue = bridgeGame.retry(command);
      return isContinue;
    } catch (error) {
      Console.print('[ERROR] ' + error);
      return this.checkRetry(bridgeGame, isSuccess);
    }
  }
}

module.exports = App;
