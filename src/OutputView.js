const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  printMap(bridge) {
    let blockString = "";
    bridge.forEach((sign, index) => {
      blockString += bridge.length - 1 === index ? ` ${sign}` : ` ${sign} |`;
    });
    MissionUtils.Console.print(`[${blockString} ]`);
  },
};

module.exports = OutputView;
