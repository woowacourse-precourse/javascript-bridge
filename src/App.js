const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const BridgeMaker = require("./BridgeMaker.js");
const InputView = require("./View/InputView.js");
const OutputView = require("./View/OutputView.js");
const {
  bridgeLength,
  bridgeDirection,
  gameContinue,
} = require("./utils/validate.js");

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

    const bridge = this.getBridgeMake(length);
    this.bridgeGame.setState({ length, bridge });
    InputView.readMoving(this.moveCallback);
  };

  getBridgeMake = (length) =>
    BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);

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
    // input 값 보고 결정할 것.
    // 값 검증
    // 재시작 관련로직 정리하기
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
      case "Retry":
        return InputView.readGameCommand(this.retryCallback);
      case "End":
        return this.endCallback(this.bridgeGame.end());
      case "Move":
        return InputView.readMoving(this.moveCallback);
    }
  };
}

const app = new App();
app.play();

module.exports = App;
