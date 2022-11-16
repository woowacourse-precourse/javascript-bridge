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

  handleBrideSizeException(size) {
    try {
      if (!validateBridgeSize(size)) throw new Error();
      const bridgeGame = new BridgeGame(size);
      this.readMoving(bridgeGame);
    } catch (e) {
      MissionUtils.Console.print(
        "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다."
      );
      this.readBridgeSize();
    }
  },
};

function validateBridgeSize(input) {
  return input.toString().match(REGEX.SIZE_RANGE);
}

module.exports = InputView;
