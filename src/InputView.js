const { Console } = require("@woowacourse/mission-utils");
const { VALID_CHAR } = require("./constants");
const ErrorChecker = require("./ErrorChecker");
const OutputView = require("./OutputView");

const InputView = {
  readBridgeSize(bridgeGame) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeSize) => {
      Console.print("");
      try {
        ErrorChecker.checkBridgeSizeValidation(bridgeSize);
      } catch (error) {
        OutputView.printError(error.message);
        this.readBridgeSize(bridgeGame);
      }
      bridgeGame.init(bridgeSize);
      this.readMoving(bridgeGame);
    });
  },

  readMoving(bridgeGame) {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (movingStep) => {
      try {
        ErrorChecker.checkValidChar(VALID_CHAR.UP, VALID_CHAR.DOWN, movingStep);
        bridgeGame.move(movingStep);
      } catch (error) {
        OutputView.printError(error.message);
        this.readMoving(bridgeGame);
      }
    });
  },

  readGameCommand(bridgeGame) {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (gameCommand) => {
      try {
        ErrorChecker.checkValidChar(VALID_CHAR.REPLAY, VALID_CHAR.QUIT, gameCommand);
        if (gameCommand === VALID_CHAR.REPLAY) bridgeGame.retry();
        else bridgeGame.quit();
      } catch (error) {
        OutputView.printError(error.message);
        this.readGameCommand(bridgeGame);
      }
    });
  },
};

module.exports = InputView;
