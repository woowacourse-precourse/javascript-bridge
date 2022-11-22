const InputView = require("../Bridge.Input/InputView");
const OutputView = require("../Bridge.UI/OutputView");
const { BRIDGE, GAME } = require("../lib/Const");
const InputException = require("./InputException");
const BridgeGame = require("./BridgeGame");
const BridgeGameShape = require("./BridgeGameShape");
const Player = require("./Player");

class BridgeInteractPlayer {
  #player;
  #bridgeGame;
  #bridgeGameShape;

  constructor() {
    this.#player = new Player();
    this.#bridgeGameShape = new BridgeGameShape();
    this.#bridgeGame = new BridgeGame();
  }

  playerInputBridgeSize() {
    InputView.readBridgeSize(this.playerCheckBridgeSize.bind(this));
  }

  playerCheckBridgeSize(size) {
    try {
      InputException.BridgeSizeValidate(size);
    } catch (error) {
      OutputView.printError(error);
    }
    this.#bridgeGame.init(size);
    OutputView.printGameStart();
    this.playerInputBridgeDirection();
    return;
  }

  playerInputBridgeDirection() {
    InputView.readMoving(this.playerCheckBridgeDirection.bind(this));
  }

  playerCheckBridgeDirection(direction) {
    try {
      InputException.playerDirectionValidate(direction);
    } catch (error) {
      OutputView.printError(error);
    }
    this.playerGoResultOutput(this.#bridgeGame.move(this.#player, direction));
  }

  playerGoResultOutput([resultBridgeArr, status]) {
    OutputView.printResult(
      this.#bridgeGameShape
        .getCurrentBridgeGameShape(resultBridgeArr, status)
        .getCurrentShape()
    );
    this.playerGoBridgeNext(status);
    return;
  }

  playerGoBridgeNext(status) {
    if (status === GAME.STATUS.PLAY) this.playerInputBridgeDirection();
    if (status === GAME.STATUS.FAIL) this.playerInputCommand();
    if (status === GAME.STATUS.END) this.playerEndThisGame(GAME.RESULT.WIN);
  }

  playerInputCommand() {
    InputView.readGameCommand(this.playerCheckCommand.bind(this));
  }

  playerCheckCommand(command) {
    try {
      InputException.playerCommandValidate(command);
    } catch (error) {
      OutputView.printError(error);
    }
    this.playerDicisionRetry(command);
  }

  playerDicisionRetry(command) {
    if (command === BRIDGE.GAME.RETRY) {
      this.bridgeGameRetry();
    }
    if (command === BRIDGE.GAME.END) {
      this.playerEndThisGame(
        this.#bridgeGameShape.getCurrentShape(),
        GAME.RESULT.FAIL
      );
    }
  }

  bridgeGameRetry() {
    this.#player.bridgeGameRetry();
    this.#bridgeGame.retry();
    this.playerInputBridgeDirection();
  }

  playerEndThisGame(isWin) {
    OutputView.printGameEnd(
      this.#bridgeGameShape.getCurrentShape(),
      isWin,
      this.#player.getBridgeGameTryCount()
    );
    return;
  }
}

module.exports = BridgeInteractPlayer;
