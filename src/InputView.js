const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readBridgeSize(callback, message) {
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  },

  readMoving(callback, message) {
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  },

  readRestart(callback, message) {
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  },

  close() {
    MissionUtils.Console.close();
  },
};

module.exports = InputView;
