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
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play = () => {
    OutputView.printInitialComment();
    InputView.readBridgeSize(this.bridgeSizeCallback);
  };

  bridgeSizeCallback = (input) => {
    const length = Number(input);
    const isBridgeValidate = bridgeLength(length, () =>
      InputView.readBridgeSize(this.bridgeSizeCallback),
    );
    if (!isBridgeValidate) return;

    const bridge = getBridgeMake(length);
    this.bridgeGame.setState({ length, bridge });
    InputView.readMoving(this.moveCallback);
  };

  moveCallback = (input) => {
    const isDirectionValidate = bridgeDirection(input, () =>
      InputView.readMoving(this.moveCallback),
    );
    if (!isDirectionValidate) return;
    const { inputHistory, bridge } = this.bridgeGame.move(input);
    OutputView.printUserInput(inputHistory, bridge);

    const nextMove = this.bridgeGame.getNextMove(input);
    this.doNextMove(nextMove);
  };

  retryCallback = (input) => {
    const isGameContinueValidate = gameContinue(input, () =>
      InputView.readGameCommand(this.retryCallback),
    );
    if (!isGameContinueValidate) return;

    const result = this.bridgeGame.retry(input);
    if (!result) {
      this.endCallback(this.bridgeGame.end());
      return;
    }

    InputView.readMoving(this.moveCallback);
  };

  endCallback = ({ inputHistory, bridge, isSuccess, tryCount }) => {
    OutputView.printGameEnd();
    OutputView.printUserInput(inputHistory, bridge);
    OutputView.printResult({ isSuccess, tryCount });
  };

  doNextMove = (nextMove) => {
    switch (nextMove) {
      case DEFAULT.RETRY:
        return InputView.readGameCommand(this.retryCallback);
      case DEFAULT.END:
        return this.endCallback(this.bridgeGame.end());
      case DEFAULT.MOVE:
        return InputView.readMoving(this.moveCallback);
    }
  };
}

const app = new App();
app.play();

module.exports = App;
