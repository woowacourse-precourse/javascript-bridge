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
    //상호 작용 담당 , 모양 출력 ,
    const [bridgeArr, result, status] = this.#bridgeGame.move(
      this.#player,
      direction
    );
    //모양 출력
    this.#bridgeGameShape
      .getCurrentBridgeGameShape(bridgeArr, result)
      .OutputResultMap();

    this.playerGoBridgeNext(result, status);
    return;
  }

  playerGoBridgeNext(result, status) {
    if (status === GAME.STATUS.END) {
      const bridge = this.#bridgeGame.winGame();
      //todo: true 고치기
      this.playerEndThisGame(bridge, true);
      return;
    }
    //성공 했을 때
    if (result)
      InputView.readMoving(this.playerInputBridgeDirection.bind(this));
    //실패 했을 때
    if (!result)
      InputView.readGameCommand(this.playerInputCommandBridgeRetry.bind(this));
    return;
  }

  playerInputCommandBridgeRetry(command) {
    switch (command) {
      case BRIDGE.GAME.RETRY:
        InputView.readMoving(this.playerInputBridgeDirection.bind(this));
        break;
      case BRIDGE.GAME.END:
        //todo: true 고치기
        this.playerEndThisGame(this.#bridgeGameShape.getCurrentShape(), true);
        break;
    }
  }

  playerEndThisGame(bridge, isWin) {
    OutputView.printResult(
      this.#bridgeGameShape
        .getCurrentBridgeGameShape(bridge, isWin)
        .getCurrentShape()
    );
    OutputView.printGameEnd(isWin, this.#player.getBridgeGameTryCount());
    return;
  }
}

const bi = new BridgeInteractPlayer();
//start
InputView.readBridgeSize(bi.playerInputBridgeSize.bind(bi));

module.exports = BridgeInteractPlayer;
