const MissionUtils = require("@woowacourse/mission-utils");
const { OUTPUT_FORM } = require("./constants/OutputForm");
const { INPUT_VALUE } = require("./constants/InputValue");

const OutputView = {
  makeBridge(moving, boolean, string) {
    let answer = moving.map((direction, index) => {
      if (direction === string) {
        return this.checkLastIndex(index, moving, boolean);
      }
      return OUTPUT_FORM.MAP_ELEMENT.NOT_SELECTED;
    });

    return answer;
  },

  checkLastIndex(index, moving, boolean) {
    if (index === moving.length - 1) {
      return boolean
        ? OUTPUT_FORM.MAP_ELEMENT.COINCIDE
        : OUTPUT_FORM.MAP_ELEMENT.WRONG;
    }
    return OUTPUT_FORM.MAP_ELEMENT.COINCIDE;
  },

  printMap(moving, boolean) {
    let upBridge = this.makeBridge(moving, boolean, INPUT_VALUE.UP).join(
      OUTPUT_FORM.MAP_ELEMENT.DIVIDER
    );
    let downBridge = this.makeBridge(moving, boolean, INPUT_VALUE.DOWN).join(
      OUTPUT_FORM.MAP_ELEMENT.DIVIDER
    );

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
