const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME } = require('./constants');
const InputView = require('./InputView');
const { printBridgeSizeException } = require('./OutputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

class CrossBrigeGame {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  gameStart() {
    OutputView.printGameStart();
    this.askBridgeSize();
  }

  askBridgeSize() {
    InputView.readBridgeSize(this.checkBridgeSize.bind(this));
  }

  setBridge(size) {
    Validator.isValidBridgeSize(size);
    const generateRandomNumber = () => BridgeRandomNumberGenerator.generate();
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    console.log(bridge);
    this.bridgeGame.setBridge(bridge);
    this.askMoving();
  }

  askMoving() {
    InputView.readMoving(this.makeMoving.bind(this));
  }

  makeMoving(moving) {
    Validator.isValidMoving(moving);
    const crossMove = this.bridgeGame.move(moving);
    OutputView.printMap(crossMove);
    return this.checkStatus(crossMove);
  }

  checkStatus(crossMove) {
    if (crossMove[0] == false) {
      return this.askRetry();
    }
    if (this.bridgeGame.isEnd()) {
      return this.makeEndGame();
    }
    return this.askMoving();
  }

  askRetry() {
    InputView.readGameCommand(this.checkRetry.bind(this));
  }

  makeRetry(input) {
    Validator.isValidInput(input);
    if (input == GAME.RETRY) {
      return this.makeNewGame(input);
    }
    return this.makeEndGame();
  }

  makeNewGame() {
    this.bridgeGame.retry();
    this.askMoving();
  }

  makeEndGame() {
    const end = this.bridgeGame.quit();
    OutputView.printResult();
    OutputView.printMap(end.moveResult);
    OutputView.printSucessOrFail(end.gameSuccess);
    OutputView.printTryCount(end.gameCount);
    Console.close();
  }
}

module.exports = CrossBrigeGame;
