const BridgeGame = require("../Models/BridgeGame");
const BridgeSize = require("./validator/BridgeSize");
const MoveSpace = require("./validator/MoveSpace");
const GameCommand = require("./validator/GAMECOMMAND");
const CheckModel = require("../Models/CheckModel");
const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const { RESULT } = require("../utils/constants");

class Controller {
  #BridgeGame;

  #CheckModel;

  constructor() {
    this.#BridgeGame = new BridgeGame();
    this.#CheckModel = new CheckModel();
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
    else this.orderMake(input);
  }

  orderMake(size) {
    this.#BridgeGame.receiveSize(size);
    this.getMoving();
  }

  getMoving() {
    InputView.readMoving(this.isAllowMoving.bind(this));
  }

  isAllowMoving(input) {
    this.moveSpace = new MoveSpace(input);
    if (!this.moveSpace.checkInput()) this.getMoving();
    else this.orderMoving(input);
  }

  orderMoving(moving) {
    const [currentMap, isSafe, isEnd] = this.#BridgeGame.move(moving);
    const nowStep = this.#CheckModel.checkNowStep();
    OutputView.printMap(currentMap, nowStep, isSafe);
    if (!isSafe) this.getAnswer();
    else if (isEnd) this.orderEnd(RESULT.SUCCESS);
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
    else this.orderEnd(RESULT.FAIL);
  }

  orderEnd(isSuccess) {
    const nowMap = this.#BridgeGame.getMap();
    const attemptCnt = this.#BridgeGame.getAttemptCnt();
    OutputView.printResult(nowMap, attemptCnt, isSuccess);
  }
}

module.exports = Controller;
