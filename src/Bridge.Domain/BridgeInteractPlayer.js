const InputView = require("../Bridge.Input/InputView");
const OutputView = require("../Bridge.UI/OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeGameShape = require("./BridgeGameShape");
const Player = require("./Player");
const { BRIDGE, GAME } = require("../lib/Const");

class BridgeInteractPlayer {
  #player;
  #bridgeGame;
  #bridgeGameShape;

  constructor() {
    this.#player = new Player();
    this.#bridgeGameShape = new BridgeGameShape();
  }

  playerInputBridgeSize(size) {
    this.#bridgeGame = new BridgeGame(size);
    OutputView.printGameStart();
    InputView.readMoving(this.playerInputBridgeDirection.bind(this));
  }

  playerInputBridgeDirection(direction) {
    const [bridgeArr, result, status] = this.#bridgeGame.move(
      this.#player,
      direction
    );
    OutputView.printResult(
      this.#bridgeGameShape
        .getCurrentBridgeGameShape(bridgeArr, result)
        .getCurrentShape()
    );
    this.playerGoBridgeNext(result, status);
    return;
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
