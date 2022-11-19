const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const InputValidate = require("./InputValidate");
const OutputView = require("./OutputView");
const BridgeGameController = require("./BridgeGameController");


class App {
  bridgeGame = null;

  /**
   * 입력 실패시 해당 단계의 함수 재귀 호출을 위한 this 바인딩
   */
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
      InputValidate.validateBridgeLength(bridgeLengthInput);
      this.bridgeGame = BridgeGameController.makeNewBridgeGame(bridgeLengthInput);
      InputView.readMoving(this.roundInputBranch);
    } catch(e) {
      MissionUtils.Console.print(e.message);
      InputView.readBridgeSize(this.roundStartBranch);
    }
  }

  roundInputBranch(directionInput) {
    try {
      InputValidate.validateDirection(directionInput);
      const roundResult = BridgeGameController.startNewRound(this.bridgeGame, directionInput);
      switch (roundResult) {
        case 0: InputView.readGameCommand(this.roundRetryBranch); break;
        case 1: InputView.readMoving(this.roundInputBranch); break;
        case 2: return null;
      }
    } catch(e) {
      MissionUtils.Console.print(e.message);
      InputView.readMoving(this.roundInputBranch);
    }
  }

  roundRetryBranch(retryInput) {
    try {
      InputValidate.validateRetry(retryInput);
      const dicision = BridgeGameController.terminate(this.bridgeGame, retryInput);
      switch (dicision) {
        case 0: return null;
        case 1: InputView.readMoving(this.roundInputBranch);
      }
    } catch(e) {
      MissionUtils.Console.print(e.message);
      InputView.readGameCommand(this.roundRetryBranch);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
