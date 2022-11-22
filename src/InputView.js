const MissionUtils = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const {
  BRIDGE_LENGTH_QUERY,
  MOVE_COMMAND_QUERY,
  RETRY_QUERY,
  MOVE_SUCCESS,
  MOVE_FAIL,
  MOVE_END,
  RETRY_GAME,
  QUIT_GAME,
} = require("./Constant");
const OutputView = require("./OutputView");
const Validation = require("./Validation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
   readBridgeSize(gameManager) {
    MissionUtils.Console.readLine(
      `\n${BRIDGE_LENGTH_QUERY}\n`,
      this.readBridgeSizeCallBack(gameManager)
    );
  },

  readBridgeSizeCallBack(gameManager) {
    return (answer) => {
      try {
        this.readBridgeNormalWork(gameManager, answer);
      } catch (error) {
        this.readBridgeErrorWork(gameManager, error);
      }
    };
  },

  readBridgeNormalWork(gameManager, answer) {
    Validation.bridgeLengthValidation(answer);
    gameManager.setBridge(
      makeBridge(answer, BridgeRandomNumberGenerator.generate)
    );
    this.readMoving(gameManager, 0, 1);
  },

  readBridgeErrorWork(gameManager, error) {
    MissionUtils.Console.print(error);
    this.readBridgeSize(gameManager);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
   readMoving(gameManager) {
    MissionUtils.Console.readLine(
      `\n${MOVE_COMMAND_QUERY}\n`,
      this.readMovingCallBack(gameManager)
    );
  },

  readMovingCallBack(gameManager) {
    return (answer) => {
      try {
        this.readMovingNormalWork(gameManager, answer);
      } catch (error) {
        this.readMovingErrorWork(gameManager, error);
      }
    };
  },

  readMovingNormalWork(gameManager, answer) {
    Validation.moveCommandValidation(answer);
    const moveResult = gameManager.move(answer);
    OutputView.printMap(gameManager.getBridge(),gameManager.getOrder(),moveResult === "FAIL");
    if (moveResult === MOVE_SUCCESS) this.readMoving(gameManager);
    if (moveResult === MOVE_FAIL) this.readGameCommand(gameManager);
    if (moveResult === MOVE_END) OutputView.printResult(gameManager, true);
  },

  readMovingErrorWork(gameManager, error) {
    MissionUtils.Console.print(error);
    this.readMoving(gameManager);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
   readGameCommand(gameManager) {
    MissionUtils.Console.readLine(
      `\n${RETRY_QUERY}\n`,
      this.readGameCommandCallBack(gameManager)
    );
  },

  readGameCommandCallBack(gameManager) {
    return (answer) => {
      try {
        this.readGameCommandNormalWork(gameManager, answer);
      } catch (error) {
        this.readGameCommandErrorWork(gameManager, error);
      }
    };
  },

  readGameCommandNormalWork(gameManager, answer) {
    Validation.retryCommandValidation(answer);
    if (answer === RETRY_GAME) {
      gameManager.retry();
      this.readMoving(gameManager);
    }
    if (answer === QUIT_GAME) OutputView.printResult(gameManager, false);
  },

  readGameCommandErrorWork(gameManager, error) {
    MissionUtils.Console.print(error);
    this.readGameCommand(gameManager);
  },
};

module.exports = InputView;
