const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const Validation = require("./Validation");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeSize) => {
      if(!Validation.checkBridgeSize(bridgeSize)) {
        this.readBridgeSize(bridgeGame);
      }
      else{
        bridgeGame.prepareGame(bridgeSize);
        this.readMoving(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (userChoice) => {
      if(!Validation.checkUserChoice(userChoice)) {
        this.readMoving(bridgeGame);
      }
      else {
        bridgeGame.move(userChoice);
        this.printMoveResult(bridgeGame);
        this.getTurnResult(bridgeGame);
      }
    });
  },

  printMoveResult(bridgeGame) {
    const currBridge = bridgeGame.getCurrBridge();
    OutputView.printMap(currBridge);
  },

  getTurnResult(bridgeGame) {
    const failFlag = bridgeGame.getFailFlag();
    const gameWinFlag = bridgeGame.getGameWinFlag();
    if(failFlag) {
      this.readGameCommand(bridgeGame);
    }
    if(!failFlag && gameWinFlag) {
      this.printGameResult(bridgeGame, true);
    }
    if(!failFlag && !gameWinFlag) {
      this.readMoving(bridgeGame);
    }
  },

  printGameResult(bridgeGame, gameResult) {
    const currBridge = bridgeGame.getCurrBridge();
    const trial = bridgeGame.getTrial();
    OutputView.printResult(currBridge, gameResult, trial);
    Console.close();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (gameRestart) => {
      if(!Validation.checkGameRestart(gameRestart)) {
        this.readGameCommand(bridgeGame);
      }
      else {
        this.restartGame(gameRestart, bridgeGame);
        this.QuitGame(gameRestart, bridgeGame);
      }
    });
  },

  restartGame(gameRestart, bridgeGame) {
    if(gameRestart === "R") {
      bridgeGame.retry();
      this.readMoving(bridgeGame);
    }
  },
  
  QuitGame(gameRestart, bridgeGame) {
    if(gameRestart === "Q") {
      this.printGameResult(bridgeGame, false);
    }
  }
};

module.exports = InputView;
