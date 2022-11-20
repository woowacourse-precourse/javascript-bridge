const BridgeGame = require('../Models/BridgeGame');
const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');

class GameController {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
    this.bridgeGame = new BridgeGame();
  }

  startGame() {
    this.outputView.printStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    this.inputView.readBridgeSize((userInput) => {
      const size = this.inputView.getBridgeSize(userInput);
      this.bridgeGame.createBridge(size);
      this.selectMoving();
    });
  }

  selectMoving() {
    this.inputView.readMoving((userInput) => {
      const select = this.inputView.getUserMoving(userInput);
      this.bridgeGame.move(select);
      this.checkResult();
    });
  }

  checkResult() {
    const progressData = this.bridgeGame.getGameProgress();
    this.outputView.printMap(progressData);

    const alive = this.bridgeGame.getAlive();
    if (!alive) return this.askRetry();

    const end = this.bridgeGame.checkGameEnd();
    if (end) return this.win();

    return this.selectMoving();
  }

  askRetry() {
    this.inputView.readGameCommand((userInput) => {
      if (userInput === 'R') return this.replay();

      return this.defeat();
    });
  }

  replay() {
    this.bridgeGame.retry();
    this.selectMoving();
  }

  win() {
    const progressData = this.bridgeGame.getGameProgress();
    const playCount = this.bridgeGame.getPlayCount();
    const gameResult = this.bridgeGame.getGameResult();
    this.outputView.printResult(progressData, playCount, gameResult);
  }

  defeat() {
    this.bridgeGame.defeat();
    const progressData = this.bridgeGame.getGameProgress();
    const playCount = this.bridgeGame.getPlayCount();
    const gameResult = this.bridgeGame.getGameResult();
    this.outputView.printResult(progressData, playCount, gameResult);
  }
}

module.exports = GameController;
