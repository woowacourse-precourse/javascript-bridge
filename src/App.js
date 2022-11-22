const InputView = require("./View/InputView.js");
const OutputView = require("./View/OutputView.js");

const {
  bridgeLength,
  bridgeDirection,
  gameContinue,
} = require("./utils/validate.js");
const { DEFAULT } = require("./utils/constant.js");
const { getBridgeMake } = require("./utils/utilityFuncions.js");

const BridgeGame = require("./BridgeGame.js");

class App {
  play() {
    const bridgeGame = new BridgeGame();
    OutputView.printInitialComment();
    InputView.readBridgeSize((input) =>
      this.bridgeSizeCallback(bridgeGame, input),
    );
  }

  bridgeSizeCallback(bridgeGame, input) {
    const length = Number(input);
    const isBridgeValidate = bridgeLength(length, () =>
      InputView.readBridgeSize((input) =>
        this.bridgeSizeCallback(bridgeGame, input),
      ),
    );
    if (!isBridgeValidate) return;

    const bridge = getBridgeMake(length);
    bridgeGame.setState({ length, bridge });
    InputView.readMoving((input) => this.moveCallback(bridgeGame, input));
  }

  moveCallback(bridgeGame, input) {
    const isDirectionValidate = bridgeDirection(input, () =>
      InputView.readMoving((input) => this.moveCallback(bridgeGame, input)),
    );
    if (!isDirectionValidate) return;
    const { inputHistory, bridge } = bridgeGame.move(input);
    OutputView.printUserInput(inputHistory, bridge);

    const nextMove = bridgeGame.getNextMove(input);
    this.doNextMove(bridgeGame, nextMove);
  }

  retryCallback(bridgeGame, input) {
    const isGameContinueValidate = gameContinue(input, () =>
      InputView.readGameCommand((input) =>
        this.retryCallback(bridgeGame, input),
      ),
    );
    if (!isGameContinueValidate) return;

    const result = bridgeGame.retry(input);
    return result
      ? InputView.readMoving((input) => this.moveCallback(bridgeGame, input))
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
        return InputView.readGameCommand((input) =>
          this.retryCallback(bridgeGame, input),
        );
      case DEFAULT.END:
        return this.endCallback(bridgeGame.end());
      case DEFAULT.MOVE:
        return InputView.readMoving((input) =>
          this.moveCallback(bridgeGame, input),
        );
    }
  }
}

new App().play();

module.exports = App;
