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
    try {
      this.bridgeSize.checkInput();
      this.orderMake(input);
    } catch {
      this.orderInputSize();
    }
  }

  orderMake(size) {
    this.#BridgeGame.create(size);
    this.orderInputMoving();
  }

  orderInputMoving() {
    InputView.readMoving(this.isAllowMoving.bind(this));
  }

  isAllowMoving(input) {
    this.moveSpace = new MoveSpace(input);
    try {
      this.moveSpace.checkInput();
      this.orderMoving(input);
    } catch {
      this.orderInputMoving();
    }
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
    try {
      this.gameCommand.checkInput();
      this.orderProcessCommand(input);
    } catch {
      this.orderInputCommand();
    }
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
