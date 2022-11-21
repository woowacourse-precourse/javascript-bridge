const Console = require("@woowacourse/mission-utils");
const {BridgeMaker, makeBridge} = require("./BridgeMaker.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const OutputView = require("./OutputView.js");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (length) => {
      bridgeGame.init(makeBridge(length,BridgeRandomNumberGenerator.generate()));
      this.readMoving(bridgeGame);
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (str) => {
      if(["U", "D"].includes(str)) bridgeGame.move(str);
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine("\n게임을 다시 시작할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (str) => {
      this.checkInput(str, bridgeGame);
    })
  },

  checkInput(str, bridgeGame){
    if(str === "R") bridgeGame.retry();
    else if(str === "R") OutputView.printResult(bridgeGame, false);
  }
};

module.exports = InputView;
