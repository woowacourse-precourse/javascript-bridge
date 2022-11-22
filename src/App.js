const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const OutputView = require("./OutputView");

const {
  bridgeLength,
  bridgeDirection,
  gameContinue,
} = require("./utils/validate");
const { DEFAULT } = require("./utils/constant");
const { getBridgeMake } = require("./utils/utilityFuncions");

const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const bridgeGame = new BridgeGame();
    OutputView.printInitialComment();
    readBridgeSize((size) => this.bridgeSizeCallback(bridgeGame, size));
  }

  bridgeSizeCallback(bridgeGame, bridgeSize) {
    const length = Number(bridgeSize);
    const isBridgeValidate = bridgeLength(length, () =>
      readBridgeSize((size) => this.bridgeSizeCallback(bridgeGame, size)),
    );
    if (!isBridgeValidate) return;

    const bridge = getBridgeMake(length);
    bridgeGame.setState({ length, bridge });
    readMoving((direction) => this.moveCallback(bridgeGame, direction));
  }

  moveCallback(bridgeGame, direction) {
    const isDirectionValidate = bridgeDirection(direction, () =>
      readMoving((direction) => this.moveCallback(bridgeGame, direction)),
    );
    if (!isDirectionValidate) return;
    const { inputHistory, bridge } = bridgeGame.move(direction);
    OutputView.printUserInput(inputHistory, bridge);

    const nextMove = bridgeGame.getNextMove(direction);
    this.doNextMove(bridgeGame, nextMove);
  }

  retryCallback(bridgeGame, command) {
    const isGameContinueValidate = gameContinue(command, () =>
      readGameCommand((command) => this.retryCallback(bridgeGame, command)),
    );
    if (!isGameContinueValidate) return;

    const result = bridgeGame.retry(command);
    return result
      ? readMoving((direction) => this.moveCallback(bridgeGame, direction))
      : this.endCallback(bridgeGame.end());
  }

  endCallback({ inputHistory, bridge, isSuccess, tryCount }) {
    OutputView.printGameEnd();
    OutputView.printUserInput(inputHistory, bridge);
    OutputView.printResult({ isSuccess, tryCount });
  }

  doNextMove(bridgeGame, nextMove) {
    switch (nextMove) {
      case DEFAULT.RETRY:
        return readGameCommand((command) =>
          this.retryCallback(bridgeGame, command),
        );
      case DEFAULT.END:
        return this.endCallback(bridgeGame.end());
      case DEFAULT.MOVE:
        return readMoving((direction) =>
          this.moveCallback(bridgeGame, direction),
        );
    }
  }
}

new App().play();

module.exports = App;
