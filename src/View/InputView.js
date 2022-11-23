const MissionUtils = require("@woowacourse/mission-utils");
const Validate = require("../Validate/Validate");
const Controller = require("../Controller/Controller");
const { GAME_OVER, GAME_CLEAR, GAME_RETRY } = require("../Constant/Constants");

const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      const result = Validate.isCorrectBridgeLength(input);
      if (result) {
        const bridgeGame = Controller.makeBridgeGame(parseInt(input));
        return this.readMoving(bridgeGame);
      }
    });
  },

  readMoving(bridgeGame) {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (input) => {
        Validate.isCorrectMove(input);
        const result = Controller.sendUserMoving(input, bridgeGame);
        if (result === GAME_OVER) return this.readGameCommand(bridgeGame);
        if (result === GAME_CLEAR) return;
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
        if (result === GAME_RETRY) this.readMoving(bridgeGame);
      }
    );
  },
};

module.exports = InputView;
