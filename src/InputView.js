const { Console } = require("@woowacourse/mission-utils");
const { PROMPT, ERROR } = require("./Constants/Constants");
const ValidCheck = require("./ValidCheck");
const OutputView = require("./OutputView");
const BridgeGameController = require("./BridgeGameController");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridgeGameControl: new BridgeGameController(),

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(PROMPT.READ_SIZE, this.readBridgeSizeCallback.bind(this));
  },

  readBridgeSizeCallback(size) {
    try {
      ValidCheck.sizeInput(size);
      this.bridgeGameControl.makeBridgeGame(size); // 다리 만들기
      this.readMoving(); // 무빙 입력받기
    } 
    catch (error) {
      OutputView.printErrorMessage(ERROR.SIZE_ERROR); // 위 과정에서 에러 발생시 에러 출력
      this.readBridgeSize(); // 다시 사이즈 입력받기
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(PROMPT.READ_MOVING, this.readMovingCallback.bind(this));
  },

  readMovingCallback(moving) {
    try {
      const isWrong = this.bridgeGameControl.manageMoving(moving); // moving 값으로 출력까지 완료
      isWrong ? this.isGameEnd() : this.readGameCommand();
    } catch (error) {
      OutputView.printErrorMessage(ERROR.MOVING_ERROR);
      this.readMoving();
    }
  },

  isGameEnd() {
    const isGameEnd = this.bridgeGameControl.isGameEnd();
    isGameEnd ? this.bridgeGameControl.gameOver(isGameEnd) : this.readMoving();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(PROMPT.READ_COMMAND, this.readGameCommandCallback.bind(this));
  },
  
  readGameCommandCallback(command) {
    try {
      const isRetry = this.bridgeGameControl.manageCommand(command);
      isRetry ? this.readMoving() : this.bridgeGameControl.gameOver();
    } catch (error) {
      OutputView.printErrorMessage(error);
      this.readGameCommand();
    }
  },
};

module.exports = InputView;
