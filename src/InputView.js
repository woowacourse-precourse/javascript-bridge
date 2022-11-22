const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = requre("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

const InputView = {
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      this.validateBridgeSize(Number(input));
      const bridge = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);

      this.readMoving(bridge);
    });
  },

  validateBridgeSize(bridgeSize) {
    if (!(bridgeSize >= 3 && bridgeSize <= 20))
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },

  readMoving(bridge) {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (input) => {
      this.validateMoving(input);
      const BridgeGame = require("./BridgeGame");
    });
  },

  validateMoving(upDown) {
    if (upDown !== "U" && upDown !== "D")
      throw new Error('[ERROR] 이동할 칸("U" 또는 "D")을 입력해주세요.');
  },

  readGameCommand(bridge) {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)", (input) => {
      this.validateGameCommand(input);
      this.restartGame(bridge, input);
    });
  },

  validateGameCommand(endingKey) {
    if (endingKey !== "R" && endingKey !== "Q")
      throw new Error('[ERROR] 재시작 또는 종료("R" 또는 "Q")를 입력해주세요.');
  },

  restartGame(bridge, restartGame) {
    const totalGame = this.bridgeGame.countGame();

    if (restartGame === "R") {
      this.bridgeGame.retry();
      this.readMoving(bridge);
    }
    if (this.restartGame === "Q") {
      OutputView.printResult(totalGame, false, this.bridgeGame.getBridge());
    }
  },
};

module.exports = InputView;
