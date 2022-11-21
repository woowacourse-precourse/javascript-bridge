const MissionUtils = require("@woowacourse/mission-utils");
const { OUTPUT_FORM } = require("./constants/OutputForm");

const OutputView = {
  makeBridge(moving, boolean, string) {
    let answer = moving.map((direction, index) => {
      if (direction == string && index === moving.length - 1) {
        this.checkBoolean(boolean);
      } else if (direction == string) {
        return OUTPUT_FORM.MAP_ELEMENT.COINCIDE;
      }
      return OUTPUT_FORM.MAP_ELEMENT.NOT_SELECTED;
    });

    return answer;
  },

  checkBoolean(boolean) {
    if (boolean) {
      return OUTPUT_FORM.MAP_ELEMENT.COINCIDE;
    }
    return OUTPUT_FORM.MAP_ELEMENT.WRONG;
  },

  printMap(moving, boolean) {
    let upBridge = this.makeBridge(moving, boolean, "U").join("|");
    let downBridge = this.makeBridge(moving, boolean, "D").join("|");

    MissionUtils.Console.print(OUTPUT_FORM.MAP(upBridge, downBridge));
  },

  printResult(moving, totalTry, success) {
    MissionUtils.Console.print(OUTPUT_FORM.RESULT.HEADER);
    this.printMap(moving, success);

    MissionUtils.Console.print(OUTPUT_FORM.RESULT.IS_SUCCESS(success));
    MissionUtils.Console.print(OUTPUT_FORM.RESULT.TOTAL_TRY(totalTry));
  },
};

module.exports = OutputView;
