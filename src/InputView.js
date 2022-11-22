const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR } = require("./constants/constants");
const Validate = require("./utils/Validate");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(MESSAGE.INPUT_LENGTH, (userInput) => {
      try {
        if (!Validate.validateBridgeLength(userInput))
          throw new Error(ERROR.BIRDGE_LENGTH);
        bridgeGame.initGame(userInput);
        this.readMoving(bridgeGame);
      } catch (e) {
        Console.print(e); //테스트 시에도 필요한지?? 필요 없으면 지우기
        this.readBridgeSize(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(MESSAGE.INPUT_MOVE, (userInput) => {
      try {
        if (!Validate.validateMove(userInput))
          throw new Error(ERROR.MOVE_COMMAND);
        bridgeGame.move(userInput);
        this.printResultMap(bridgeGame);
        this.manageResult(bridgeGame);
      } catch (e) {
        Console.print(e); //테스트 시에도 필요한지?? 필요 없으면 지우기
        this.readMoving(bridgeGame);
      }
    });
  },

  printResultMap(bridgeGame) {
    const bridgeState = bridgeGame.getbridgeState();
    OutputView.printMap(bridgeState);
  },

  manageResult(bridgeGame) {
    const { isFail, isSuccess } = bridgeGame.getGameState();
    // 게임 실패
    if (isFail) {
      this.readGameCommand(bridgeGame);
    }
    //게임 성공
    if (!isFail && isSuccess) {
      this.printGameResult(bridgeGame, true);
    }
    //다음 턴 이동
    if (!isFail && !isSuccess) {
      this.readMoving(bridgeGame);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {},
};

module.exports = InputView;
