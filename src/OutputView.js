const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant");

const OutputView = {
  nowArray: [],
  resultArray: "",

  start() {
    MissionUtils.Console.print(MESSAGE.gameStart);
  },

  printMap(arrayState) {
    this.nowArray.push(arrayState[0]);
    this.nowArray.push(arrayState[1]);
    const upSide = arrayState[0].join(" | ");
    const upSideResult = `[ ${upSide} ]`;
    const downSide = arrayState[1].join(" | ");
    const downSideResult = `[ ${downSide} ]`;
    this.resultArray = `${upSideResult}\n${downSideResult}`;
    return MissionUtils.Console.print(`${upSideResult}\n${downSideResult}\n`);
  },

  printResult(totalTry, gameResult) {
    MissionUtils.Console.print(
      `${MESSAGE.result}\n${this.resultArray}\n\n${
        MESSAGE.checkResult + gameResult
      }\n${MESSAGE.countTry + totalTry}`
    );
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
