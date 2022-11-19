const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGameController = require("./BridgeGameController");


class App {
  bridgeGame = null;

  constructor() {
    this.roundStartBranch = this.roundStartBranch.bind(this);
    this.roundInputBranch = this.roundInputBranch.bind(this);
    this.roundRetryBranch = this.roundRetryBranch.bind(this);
  }

  play() {
    OutputView.printString("다리 건너기 게임을 시작합니다.\n");
    InputView.readBridgeSize(this.roundStartBranch);
  }

  roundStartBranch(bridgeLengthInput) {
    try {
      this.bridgeGame = BridgeGameController.makeNewBridgeGame(InputView.validateBridgeLength(bridgeLengthInput));
      InputView.readMoving(this.roundInputBranch);
    } catch (e) {
      MissionUtils.Console.print(e.message);
      InputView.readBridgeSize(this.roundStartBranch);
    }
  }

  roundInputBranch(directionInput) {
    if (!['U','D'].includes(directionInput)) throw new Error("[ERROR] U 혹은 D를 입력해야 합니다.");
    const roundResult = BridgeGameController.startNewRound(this.bridgeGame, directionInput);
    switch (roundResult) {
      case 0: InputView.readGameCommand(this.roundRetryBranch); break;
      case 1: InputView.readMoving(this.roundInputBranch); break;
      case 2: return null;
    }
  }

  roundRetryBranch(retryInput) {
    if (!['R','Q'].includes(retryInput)) throw new Error("[ERROR] R 혹은 Q를 입력해야 합니다.");
    const dicision = BridgeGameController.terminate(this.bridgeGame, retryInput);
    switch (dicision) {
      case 0: return null;
      case 1: InputView.readMoving(this.roundInputBranch);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
