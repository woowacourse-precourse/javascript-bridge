const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, WORD } = require("./Constants");

const InputView = {
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(MESSAGE.INPUT.BRIDGE_SIZE, (answer) => {
      try {
        console.log(answer); // 삭제 가능
        this.validateBridgeSize(answer);
        callback(answer);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readBridgeSize(callback);
      }
    });
  },
  validateBridgeSize(bridgeSize) {
    if (WORD.START_SIZE <= bridgeSize && bridgeSize <= WORD.END_SIZE) {
      return bridgeSize;
    }
    throw MESSAGE.ERROR.BRIDGE_SIZE;
  },

  readMoving(callback) {
    MissionUtils.Console.readLine(MESSAGE.INPUT.MOVING, (answer) => {
      try {
        console.log(answer.toUpperCase()); // 삭제 가능
        this.validateMoving(answer.toUpperCase());
        callback(answer.toUpperCase());
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readMoving(callback);
      }
    });
  },
  validateMoving(moving) {
    if (moving === WORD.UP || moving === WORD.DOWN) return moving;
    throw MESSAGE.ERROR.MOVING;
  },

  readGameCommand(callback) {
    MissionUtils.Console.readLine(MESSAGE.INPUT.GAME_COMMAND, (answer) => {
      try {
        console.log(answer.toUpperCase()); // 삭제 가능
        this.validateGameCommand(answer.toUpperCase());
        callback(answer.toUpperCase());
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readGameCommand(callback);
      }
    });
  },
  validateGameCommand(gameCommand) {
    if (gameCommand === WORD.RETRY || gameCommand === WORD.QUIT)
      return gameCommand;
    throw MESSAGE.ERROR.GAME_COMMAND;
  },
};

module.exports = InputView;
