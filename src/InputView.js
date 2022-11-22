const BridgeGame = require("./BridgeGame");
const MissionUtils = require("@woowacourse/mission-utils");
const Validate = require("./Validate");
const { INPUT_MESSAGE } = require("./Utils");

const bridgeGame = new BridgeGame;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.INPUT_BRIDGE_LENGTH, (size) => {
      try {
        Validate.validateBridgeLength(size);
        bridgeGame.getBridge(size);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readBridgeSize();
      };
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.CHOICE_SPACE_TO_MOVE, (move) => {
      try {
        Validate.validateMoving(move);
        bridgeGame.getMoving(move);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readMoving();
      };
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.INPUT_CHOICE_RETRY_OR_END, (command) => {
      try {
        Validate.ValidateCommand(command);
        bridgeGame.getGameCommand(command);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readGameCommand();
      };
    });
  },
};

module.exports = InputView;
