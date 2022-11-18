const MissionUtils = require("@woowacourse/mission-utils");
const { VALUE } = require("./constant");

const OutputView = {
  printStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  printBridge(bridge) {
    let blockString = "";
    bridge.forEach((sign, index) => {
      blockString += bridge.length - 1 === index ? ` ${sign}` : ` ${sign} |`;
    });
    MissionUtils.Console.print(`[${blockString} ]`);
  },

  printMap(bridgeResult) {
    this.printBridge(bridgeResult.upResult);
    this.printBridge(bridgeResult.downResult);
  },

  printResult(bridgeGame) {
    const result = bridgeGame.getIsSuccess() ? VALUE.SUCCESS : VALUE.FAIL;

    MissionUtils.Console.print("\n최종 게임 결과");
    this.printMap(bridgeGame.getBridgeResult());
    MissionUtils.Console.print("\n게임 성공 여부: " + result);
    MissionUtils.Console.print(
      "총 시도한 횟수: " + bridgeGame.getTrialNumber()
    );
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
