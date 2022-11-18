const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

class App {
  #appStatus = 1;

  #bridgeAnswer;

  play() {
    OutputView.printStart();
    this.progressApp(this.#appStatus);
  }

  progressApp(appStatus) {
    if (appStatus === 1) return this.progressBridgeMake();
    if (appStatus === 2) return BridgeMaker.makeBridge(this.#bridgeAnswer);
  }

  progressBridgeMake() {
    InputView.readBridgeSize((answer) => {
      if (Validator.checkBridgeInput(answer)) {
        this.#bridgeAnswer = +answer;
        this.#appStatus = 2;
        console.log(this.#appStatus, typeof this.#bridgeAnswer, '확인');
        this.progressApp(this.#appStatus);
      }
    });
  }
}

module.exports = App;

const app = new App();

console.log(app.play());

// 실패가 되면 메서드를 재실행시켜야됨
