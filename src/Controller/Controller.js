const BridgeGame = require("../Models/BridgeGame");
const BridgeSize = require("../utils/validator/BridgeSize");
const MoveSpace = require("../utils/validator/MoveSpace");
const GameCommand = require("../utils/validator/GAMECOMMAND");
const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const { RESULT } = require("../utils/constants");

class Controller {
  #BridgeGame;

  constructor() {
    this.#BridgeGame = new BridgeGame();
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
    this.#BridgeGame.receiveSize(size);
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
    const [bridge, isSafe, isEnd] = this.#BridgeGame.move(moving);
    const nowStep = this.#BridgeGame.checkNowStep();
    OutputView.printMap(bridge, nowStep, isSafe);
    if (!isSafe) this.getAnswer();
    else if (isEnd) this.orderEnd(RESULT.TRUE);
    else this.getMoving();
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
    if (this.#BridgeGame.retry(answer)) this.getMoving();
    else this.orderEnd(RESULT.FALSE);
  }

  orderEnd(isSuccess) {
    const nowMap = this.#BridgeGame.checkMap();
    const attemptCnt = this.#BridgeGame.letEnd();
    OutputView.printResult(nowMap, attemptCnt, isSuccess);
  }
}

module.exports = Controller;
