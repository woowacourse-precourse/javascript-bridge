const BridgeGame = require ('./BridgeGame');
const { MESSAGE } = require('./constants/messages');
const Validate = require('./utils/validation');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
 const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.READ_USER_INPUT_COMMAND, (input) => {
      this.handleBridgeSizeException(input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
   readMoving(game) {
    MissionUtils.Console.readLine(
      MESSAGE.READ_USER_INPUT_MOVE,
      (input) => {
        this.handleMovingException(input, game);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  handleBridgeSizeException(size) {
    try {
      Validate.userInputSize(size);
      const bridgeGame = new BridgeGame(size);
      this.readMoving(bridgeGame);
    } catch (error) {
      MissionUtils.Console.print(MESSAGE.ERROR.USER_INPUT_BRIDGE_SIZE_INVALID);
      this.readBridgeSize();
    }
  },

  handleMovingException(move, game) {
    try {
      Validate.userInputMove(move);
      const moveResult = game.move(move);
      OutputView.printMap(moveResult[0], moveResult[1]);
      this.handleGameStatus(moveResult[2], game);
    } catch (error) {
      MissionUtils.Console.print(MESSAGE.ERROR.USER_INPUT_MOVING_KEY_INVALID);
      this.readMoving(game);
    }
  },
};

module.exports = InputView;