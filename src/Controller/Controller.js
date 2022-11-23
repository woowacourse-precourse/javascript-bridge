const BridgeGame = require("../Models/BridgeGame");
const BridgeSize = require("./validator/BridgeSize");
const MoveSpace = require("./validator/MoveSpace");
const GameCommand = require("./validator/GAMECOMMAND");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

const { RESULT } = require("../utils/constants");

class Controller {
  #BridgeGame;

  constructor() {
    this.#BridgeGame = new BridgeGame();
  }

  gameStart() {
    OutputView.printStart();
    this.orderInputSize();
  }

  orderInputSize() {
    InputView.readBridgeSize(this.isAllowSize.bind(this));
  }

  isAllowSize(input) {
    this.bridgeSize = new BridgeSize(input);
    if (!this.bridgeSize.checkInput()) return this.orderInputSize();
    return this.orderMake(input);
  }

  orderMake(size) {
    OutputView.printBlank();
    this.#BridgeGame.create(size);
    this.orderInputMoving();
  }

  orderInputMoving() {
    InputView.readMoving(this.isAllowMoving.bind(this));
  }

  isAllowMoving(input) {
    this.moveSpace = new MoveSpace(input);
    if (!this.moveSpace.checkInput()) return this.orderInputMoving();
    return this.orderMoving(input);
  }

  orderMoving(moving) {
    const [currentMap, isSafe, isEnd] = this.#BridgeGame.move(moving);
    this.orderPrint(currentMap);
    if (!isSafe) return this.orderInputCommand();
    if (isEnd) return this.orderGameEnd(RESULT.SUCCESS);
    return this.orderInputMoving();
  }

  orderPrint(currentMap) {
    OutputView.printMap(currentMap);
  }

  orderInputCommand() {
    InputView.readGameCommand(this.isAllowCommand.bind(this));
  }

  isAllowCommand(input) {
    this.gameCommand = new GameCommand(input);
    if (!this.gameCommand.checkInput()) return this.orderInputCommand();
    return this.orderProcessCommand(input);
  }

  orderProcessCommand(command) {
    if (this.#BridgeGame.retry(command)) return this.orderInputMoving();
    return this.orderGameEnd(RESULT.FAIL);
  }

  orderGameEnd(isSuccess) {
    const [nowMap, attemptCnt] = this.#BridgeGame.getGameInfo();
    OutputView.printResult(nowMap, attemptCnt, isSuccess);
  }
}

module.exports = Controller;
