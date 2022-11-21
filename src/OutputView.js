const Print = require('../src/Print');
const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(userInputArray, bridgeInfoArray, bridgeUpside=[], bridgeDownside=[]) {
    const CurrentRound = userInputArray.length;
    this.addLeftBracket(bridgeUpside, bridgeDownside);
    for (let i = 0; i < CurrentRound; i++) {
      this.getAllgameResult(bridgeUpside, bridgeDownside, userInputArray, bridgeInfoArray, i);
      this.addDivision(bridgeUpside, bridgeDownside);
    }
    this.deleteItem(bridgeUpside, bridgeDownside);
    this.addRightBracket(bridgeUpside, bridgeDownside);
    Print.BothBridge(bridgeUpside, bridgeDownside);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  addLeftBracket(upside, downside) {
    upside.push('[ ');
    downside.push('[ ');
  },
  addRightBracket(upside, downside) {
    upside.push(' ]');
    downside.push(' ]');
  },
  addDivision(upside, downside) {
    upside.push(' | ');
    downside.push(' | ');
  },
  deleteItem(upside, downside) {
    upside.pop();
    downside.pop();
  },
  getAllgameResult(userInputArray, bridgeInfoArray,upside, downside, count) {
    this.getUpsideResult(userInputArray, bridgeInfoArray, upside, downside, count);
    this.getDownsideResult(userInputArray, bridgeInfoArray, upside, downside, count);
  },
  getUpsideResult(userInputArray, bridgeInfoArray, upside, downside, count) {
    if (bridgeInfoArray[count] === 1) {
      if (userInputArray[count] === 1) {
        upside.push('O');
        downside.push('\u00A0');
      }
      if (userInputArray[count] === 0) {
        upside.push(`\u00A0`);
        downside.push('X');
      }
    }
  },
  getDownsideResult(userInputArray, bridgeInfoArray, upside, downside, count) {
    if (bridgeInfoArray[count] === 0) {
      if (userInputArray[count] === 1) {
        upside.push('X');
        downside.push('\u00A0');
      }
      if (userInputArray[count] === 0) {
        upside.push('\u00A0');
        downside.push('O');
      }
    }
  }
};

module.exports = OutputView;