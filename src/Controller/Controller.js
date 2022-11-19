const BridgeGame = require("../Model/BridgeGame");
const BridgeSize = require("../error/BridgeSize");
const MoveSpace = require("../error/MoveSpace");
const GameCommand = require("../error/GAMECOMMAND");
const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");

class Controller {
  #nowMap;

  constructor() {
    this.BridgeGame = new BridgeGame();
    this.#nowMap = [];
  }

  gameStart() {
    OutputView.printStart();
    this.getSize();
  }

  getSize() {
    InputView.readBridgeSize(this.isAllowSize.bind(this));
  }

  isAllowSize(input) {
    this.bridgeSize = new BridgeSize(input);
    if (!this.bridgeSize.checkInput()) this.getSize();
    else this.giveSize(input);
  }

  giveSize(size) {
    this.BridgeGame.receiveSize(size);
    this.getMoving();
  }

  getMoving() {
    InputView.readMoving(this.isAllowMoving.bind(this));
  }

  isAllowMoving(input) {
    this.moveSpace = new MoveSpace(input);
    if (!this.moveSpace.checkInput()) this.getMoving();
    else this.giveMoving(input);
  }

  giveMoving(moving) {
    const [bridge, isSafe, isEnd] = this.BridgeGame.move(moving);
    const nowStep = this.BridgeGame.checkNowStep();
    this.#nowMap = OutputView.printMap(bridge, nowStep, isSafe);
    if (!isSafe) this.getAnswer();
    else {
      if (isEnd) this.orderEnd(true);
      else this.getMoving();
    }
  }

  getAnswer() {
    InputView.readGameCommand(this.isAllowCommand.bind(this));
  }

  isAllowCommand(input) {
    this.gameCommand = new GameCommand(input);
    if (!this.gameCommand.checkInput()) this.getAnswer();
    else this.giveAnswer(input);
  }

  giveAnswer(answer) {
    const [order, attemptCnt] = this.BridgeGame.retry(answer);
    if (order) this.getMoving();
    else this.orderEnd(attemptCnt, false);
  }

  orderEnd(isSuccess) {
    const attemptCnt = this.BridgeGame.letEnd();
    OutputView.printResult(this.#nowMap, attemptCnt, isSuccess);
  }
}

module.exports = Controller;
