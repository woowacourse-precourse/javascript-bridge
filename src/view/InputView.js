const MissionUtils = require("@woowacourse/mission-utils");
const GameConfig = require("../util/GameConfig");
const Validator = require("../Validator");

const InputView = {
  readBridgeSize(callback, message) {
    MissionUtils.Console.readLine(message, (answer) => {
      try {
        Validator.isBridgeSizeValidate(answer);
      } catch (e) {
        MissionUtils.Console.print(e.message);
        this.readBridgeSize(callback, message);
        return;
      }
      callback(answer);
    });
  },

  readMoving(callback, message) {
    MissionUtils.Console.readLine(message, (answer) => {
      try {
        Validator.isMoveInputValidate(answer);
      } catch (e) {
        MissionUtils.Console.print(e.message);
        this.readMoving(callback, message);
        return;
      }
      callback(answer);
    });
  },

  readRestart(callback, message) {
    MissionUtils.Console.readLine(message, (answer) => {
      try {
        Validator.isRestartInputValidate(answer);
      } catch (e) {
        MissionUtils.Console.print(e.message);
        this.readRestart(callback, message);
        return;
      }
      callback(answer);
    });
  },

  close() {
    MissionUtils.Console.close();
  },
};

module.exports = InputView;
