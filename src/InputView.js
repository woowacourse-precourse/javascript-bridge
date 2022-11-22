const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize;
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeSizeInput) => {
      bridgeSize = Number(bridgeSizeInput);
      this.handleSizeError(bridgeSize);
    });
    return bridgeSize;
  },

  handleSizeError(bridgeSize) {
    const validation = new Validation();
    try {
        validation.checkSizeInputValidation(bridgeSize);
    } catch (error) {
        MissionUtils.Console.print(error);
        this.readBridgeSize();
    }
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const validation = new Validation();
    let moving;
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", (movingInput) => {
      moving = movingInput;
      validation.checkMovingInputValidation(moving);
    });
    return moving;
  },

  handleMovingError(movingInput) {
    const validation = new Validation();
    try {
        validation.checkMovingInputValidation(movingInput);
    } catch (error) {
        MissionUtils.Console.print(error);
        this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const validation = new Validation();
    let gameCommand; 
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)", (gameCommandInput) => {
      gameCommand = gameCommandInput;
      validation.checkRetryInputValidation(gameCommand);
    });
    return gameCommand;
  },

  handleRetryError(gameCommandInput) {
    const validation = new Validation();
    try {
        validation.checkRetryInputValidation(gameCommandInput);
    } catch (error) {
        MissionUtils.Console.print(error);
        this.readGameCommand();
    }
  },
};

module.exports = InputView;
