const MissionUtils = require("@woowacourse/mission-utils");
const { REGEX } = require("./constant");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      this.handleBrideSizeException(input);
    });
  },
};

module.exports = InputView;
