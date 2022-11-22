const InputView = require("../Bridge.Input/InputView");
const OutputView = require("../Bridge.UI/OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeGameShape = require("./BridgeGameShape");
const Player = require("./Player");
const { BRIDGE, GAME } = require("../lib/Const");
const InputException = require("./InputException");

class BridgeInteractPlayer {
  #player;
  #bridgeGame;
  #bridgeGameShape;

  constructor() {
    this.#player = new Player();
    this.#bridgeGameShape = new BridgeGameShape();
    this.#bridgeGame = new BridgeGame();
  }

  playerInputBridgeSize(size) {
    try {
      InputException.BridgeSizeValidate(size);
    } catch (error) {
      OutputView.printError(error);
    }
    this.#bridgeGame.init(size);
    OutputView.printGameStart();
    InputView.readMoving(this.playerInputBridgeDirection.bind(this));
    return;
  }

  playerInputBridgeDirection(direction) {
    try {
      InputException.playerDirectionValidate(direction);
    } catch (error) {
      OutputView.printError(error);
    }
    this.playerGoResultOutput(
      direction,
      this.#bridgeGame.move(this.#player, direction)
    );
    return;
  }

  playerGoResultOutput(direction, [resultBridgeArr, status]) {
    OutputView.printResult(
      this.#bridgeGameShape
        .getCurrentBridgeGameShape(resultBridgeArr, status, direction)
        .getCurrentShape()
    );
    this.playerGoBridgeNext(status);
    return;
  }

  playerGoBridgeNext(status) {
    switch (status) {
      case GAME.STATUS.PLAY:
        InputView.readMoving(this.playerInputBridgeDirection.bind(this));
        break;
      case GAME.STATUS.FAIL:
        InputView.readGameCommand(
          this.playerInputCommandBridgeRetry.bind(this)
        );
        break;
      case GAME.STATUS.END:
        this.playerEndThisGame(GAME.RESULT.WIN);
        break;
    }
  }

  //BridgeGame 에 분리
  playerInputCommandBridgeRetry(command) {
    InputException.playerCommandValidate(command);
    if (command === BRIDGE.GAME.RETRY) {
      this.#player.bridgeGameRetry();
      this.#bridgeGame.retry();
      InputView.readMoving(this.playerInputBridgeDirection.bind(this));
      return;
    }
    if (command === BRIDGE.GAME.END) {
      this.playerEndThisGame(
        this.#bridgeGameShape.getCurrentShape(),
        GAME.RESULT.FAIL
      );
      return;
    }
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
