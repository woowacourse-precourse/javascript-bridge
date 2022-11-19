const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const InputValidate = require("./InputValidate");
const OutputView = require("./OutputView");
const BridgeGameController = require("./BridgeGameController");


class App {
  bridgeGame = null;

  
  // 함수 재귀 호출을 위한 this 바인딩
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
      this.roundResultBranch(BridgeGameController.startNewRound(this.bridgeGame, directionInput));
    } catch(e) {
      MissionUtils.Console.print(e.message);
      InputView.readMoving(this.roundInputBranch);
    }
  }

  roundResultBranch(roundResult) {
    switch (roundResult) {
      case 0: InputView.readGameCommand(this.roundRetryBranch); break;
      case 1: InputView.readMoving(this.roundInputBranch); break;
      case 2: return null;
    }
  }

  roundRetryBranch(retryInput) {
    try {
      InputValidate.validateRetry(retryInput);
      this.terminateBranch(BridgeGameController.terminate(this.bridgeGame, retryInput));
    } catch(e) {
      MissionUtils.Console.print(e.message);
      InputView.readGameCommand(this.roundRetryBranch);
    }
  }

  terminateBranch(dicision) {
    if (dicision == 1) {
      InputView.readMoving(this.roundInputBranch);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
