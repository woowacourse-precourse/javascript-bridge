const InputView = require("../Bridge.Input/InputView");
const BridgeGame = require("./BridgeGame");
const BridgeGameShape = require("./BridgeGameShape");
const Player = require("./Player");
const { BRIDGE, GAME } = require("../lib/Const");
const OutputView = require("../Bridge.UI/OutputView");

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
    this.#bridgeGame.start();
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
      //todo: true 고치기
      this.playerEndThisGame(
        this.#bridgeGameShape.getCurrentShape(),
        GAME.RESULT.WIN
      );
      return;
    }
    if (result)
      InputView.readMoving(this.playerInputBridgeDirection.bind(this));
    if (!result)
      InputView.readGameCommand(this.playerInputCommandBridgeRetry.bind(this));
    return;
  }

  playerInputCommandBridgeRetry(command) {
    switch (command) {
      case BRIDGE.GAME.RETRY:
        this.#player.bridgeGameRetry();
        InputView.readMoving(this.playerInputBridgeDirection.bind(this));
      case BRIDGE.GAME.END:
        this.playerEndThisGame(
          this.#bridgeGameShape.getCurrentShape(),
          GAME.RESULT.FAIL
        );
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

const bi = new BridgeInteractPlayer();

InputView.readBridgeSize(bi.playerInputBridgeSize.bind(bi));

module.exports = BridgeInteractPlayer;
