const MissionUtils = require("@woowacourse/mission-utils");
const Validate = require("../Validate");

const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      const result = Validate.isCorrectBridgeLength(input);
      if (result) {
        const bridgeGame = Controller.makeBridgeGame(parseInt(input));
        this.readMoving(bridgeGame);
      }
    });
  },

  readMoving(bridgeGame) {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (input) => {
        Validate.isCorrectMove(input);
        const result = Controller.sendUserMoving(input, bridgeGame);
        if (result === 1) return this.readGameCommand(bridgeGame);
        if (result === 2) return;
        this.readMoving(bridgeGame);
      }
    );
  },

  readGameCommand(bridgeGame) {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (input) => {
        Validate.isCorrectGameCommand(input);
        const result = Controller.sendGameCommand(input, bridgeGame);
        if (result === true) this.readMoving(bridgeGame);
      }
    );
  },
};

module.exports = InputView;
