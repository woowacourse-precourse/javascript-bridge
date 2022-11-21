const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const BridgeMaker = require("./BridgeMaker.js");
const InputView = require("./View/InputView.js");
const OutputView = require("./View/OutputView.js");
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
    // 값 검증
    const length = Number(input);
    const bridge = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate,
    );

    this.bridgeGame.setState({ length, bridge });
    InputView.readMoving(this.moveCallback);
  };

  moveCallback = (input) => {
    this.bridgeGame.move(input);
    // 여기서 한번 갈라질 것
    const nextMove = this.bridgeGame.getNextMove(input);
    this.doNextMove(nextMove);
  };

  retryCallback = (input) => {
    // input 값 보고 결정할 것.
    // 값 검증
    // 재시작 관련로직 정리하기
    const result = this.bridgeGame.retry(input);
    if (!result) {
      this.bridgeGame.end();
      return;
    }
    InputView.readMoving(this.moveCallback);
  };

  doNextMove = (nextMove) => {
    switch (nextMove) {
      case "Retry":
        return InputView.readGameCommand(this.retryCallback);
      case "End":
        return this.bridgeGame.end();
      case "Move":
        return InputView.readMoving(this.moveCallback);
      default:
        return;
    }
  };
}

const app = new App();
app.play();

module.exports = App;
