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
  printMap(userInputArray, bridgeInfoArray) {
    const bridgeUpside = [];
    const bridgeDownside = [];
    const CurrentRound = userInputArray.length;
    bridgeUpside.push('[ ');
    bridgeDownside.push('[ ');
    for (let i = 0; i < CurrentRound; i++) {
      if (bridgeInfoArray[i] === 1) {
        if (userInputArray[i] === 1) {
          bridgeUpside.push('O');
          bridgeDownside.push('\u00A0');
        }
        if (userInputArray[i] === 0) {
          bridgeUpside.push(`\u00A0`);
          bridgeDownside.push('X');
        }
      }
      if (bridgeInfoArray[i] === 0) {
        if (userInputArray[i] === 1) {
          bridgeUpside.push('X');
          bridgeDownside.push('\u00A0');
        }
        if (userInputArray[i] === 0) {
          bridgeUpside.push('\u00A0');
          bridgeDownside.push('O');
        }
      }
      bridgeUpside.push(' | ');
      bridgeDownside.push(' | ');
    }
    bridgeUpside.pop(' | ');
    bridgeDownside.pop(' | ');
    bridgeUpside.push(' ]');
    bridgeDownside.push(' ]');

    Print.Bridge(bridgeUpside);
    Print.Bridge(bridgeDownside);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;