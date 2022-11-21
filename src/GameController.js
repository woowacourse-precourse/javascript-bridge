const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const Validation = require("./Validation");

class GameController {

  constructor() {
    this.BridgeGame = new BridgeGame();
  }

  start() {
      OutputView.printStart();
      this.getBridgeSize();
    }

  getBridgeSize() {
    InputView.readBridgeSize(this.checkSizeValidation.bind(this));
  }

  checkSizeValidation(inputBridgeSize) {
    try {
      Validation.checkBridgeSize(inputBridgeSize);
    } catch (Error) {
      MissionUtils.Console.print(`${Error.message} \n`);
      return this.getBridgeSize();
    }

    return this.makeBridge(inputBridgeSize);
  }

  makeBridge(bridgeSize) {
    this.BridgeGame.makeBridge(bridgeSize);
    OutputView.printSpace();
    this.getMoving();
  }

  getMoving() {
    InputView.readMoving(this.checkMoveValidation.bind(this));
  }

  checkMoveValidation(inputMoving) {
    try {
      Validation.checkMoving(inputMoving);
    } catch (Error) {
      MissionUtils.Console.print(`${Error.message} \n`);
      return this.getMoving();
    }

    return this.moveCycle(inputMoving);
  }

  moveCycle(moving) {
    const usersMove = this.BridgeGame.move(moving);

    this.makeMapCycle(usersMove);
    this.checkCanMoveNextStep();
  }

  makeMapCycle(usersMove) {
    const map = this.makeMap(usersMove);
    OutputView.printMap(map);
  }

  makeMap(usersMove) {
    const mapSize = usersMove.length;
    let upMap = "", downMap = "";

    for (let mapIdx = 0; mapIdx < mapSize; mapIdx++) {
      const nowMove = usersMove[mapIdx];
      upMap += this.makeUpBridge(nowMove);
      downMap += this.makeDownBridge(nowMove);
    }

    return [this.changeStrToArray(upMap), this.changeStrToArray(downMap)];
  }

  changeStrToArray(str) {
    return Array.from(str);
  }

  makeUpBridge(nowMove) {
    if (nowMove[0] === 'U') {
      if (nowMove[1] === 'O') {
        return 'O';
      }
      return 'X';
    }
    return ' ';
  }

  makeDownBridge(nowMove) {
    if (nowMove[0] === 'D') {
      if (nowMove[1] === 'O') {
        return 'O';
      }
      return 'X';
    }
    return ' ';
  }

  checkCanMoveNextStep() {
    const status = this.BridgeGame.checkCurrentStatus()

    if (status === "gameOver") {
      this.getRetryOrEnd();
      return;
    }

    if (status === "arrival") {
      this.end();
      return;
    }

    this.getMoving();
    return;
  }

  getRetryOrEnd() {
    InputView.readGameCommand(this.checkRetryOrEnd.bind(this));
  }

  checkRetryOrEnd(inputRetryOrEnd) {
    try {
      Validation.checkInputRetryOrEnd(inputRetryOrEnd);
    } catch (Error) {
      MissionUtils.Console.print(`${Error.message} \n`);
      return this.getRetryOrEnd();
    }

    (inputRetryOrEnd === 'R') ? this.retry() : this.end();
  }

  retry() {
    this.BridgeGame.retry();
    this.getMoving();
  }

  end() {
    const gameResult = this.BridgeGame.endResult();
    const usersMove = gameResult.shift();
    const map = this.makeMap(usersMove);

    OutputView.printResult(gameResult, map);
  }
}

module.exports = GameController;
