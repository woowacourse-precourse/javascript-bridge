const { Console } = require("@woowacourse/mission-utils");
const { INTRO_MESSAGE } = require("./libs/const");
const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  printMap([upBridge, downBridge]) {
    Console.print(`[ ${upBridge.join(" | ")} ]`);
    Console.print(`[ ${downBridge.join(" | ")} ]`);
  },
  printEndMessage(isFail) {
    Console.print(`${!isFail ? "\n" : ""}` + INTRO_MESSAGE.end);
  },

  printResult({ isSuccess, attemptCount }) {
    Console.print(`\n게임 성공 여부: ${isSuccess ? "성공" : "실패"}`);
    Console.print(`총 시도한 횟수: ${attemptCount}`);
  },
};

module.exports = OutputView;
