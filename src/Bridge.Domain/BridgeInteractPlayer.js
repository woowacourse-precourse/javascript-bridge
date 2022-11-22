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
  }

  playerInputBridgeDirection(direction) {
    InputException.playerDirectionValidate(direction);
    const [bridgeArr, result, status] = this.#bridgeGame.move(
      this.#player,
      direction
    );
    this.playerGoResultOutput(bridgeArr, result, status);
    return;
  }

  playerGoResultOutput(resultBridgeArr, result, status) {
    OutputView.printResult(
      this.#bridgeGameShape
        .getCurrentBridgeGameShape(resultBridgeArr, result)
        .getCurrentShape()
    );
    this.playerGoBridgeNext(result, status);
  }

  playerGoBridgeNext(result, status) {
    if (status === GAME.STATUS.END) {
      this.playerEndThisGame(
        this.#bridgeGameShape.getCurrentShape(),
        GAME.RESULT.WIN
      );
      return;
    }
    if (result) {
      InputView.readMoving(this.playerInputBridgeDirection.bind(this));
      return;
    }

    if (!result) {
      InputView.readGameCommand(this.playerInputCommandBridgeRetry.bind(this));
      return;
    }
  }

  //BridgeGame 에 분리
  playerInputCommandBridgeRetry(command) {
    InputException.playerCommandValidate(command);
    if (command === BRIDGE.GAME.RETRY) {
      this.#player.bridgeGameRetry();
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

  playerEndThisGame(bridgeResult, isWin) {
    OutputView.printGameEnd(
      bridgeResult,
      isWin,
      this.#player.getBridgeGameTryCount()
    );
    return;
  }
}

module.exports = BridgeInteractPlayer;
