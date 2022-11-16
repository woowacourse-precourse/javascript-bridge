const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * @param {string[]} bridge // 다리
   * @param {string[]} inputs // 플레이어의 입력
   */
  printMap(bridge, inputs) {
    const upperPart = this.makeUpperPart(bridge, inputs);
    const lowerPart = this.makeLowerPart(bridge, inputs);
    Console.print(`[ ${upperPart} ]\n[ ${lowerPart} ]`);
  },

  /**
   * @param {string[]} bridge // 다리
   * @param {string[]} inputs // 플레이어의 입력
   * @return {string} // 출력할 map의 윗부분
   */
  makeUpperPart(bridge, inputs) {
    const upperPart = inputs.map((e, i) => {
      if (e !== 'U') return ' ';
      if (e === bridge[i]) return 'O';
      return 'X';
    });

    return upperPart.join(' | ');
  },

  /**
   * @param {string[]} bridge // 다리
   * @param {string[]} inputs // 플레이어의 입력
   * @return {string} // 출력할 map의 아랫부분
   */
  makeLowerPart(bridge, inputs) {
    const lowerPart = inputs.map((e, i) => {
      if (e !== 'D') return ' ';
      if (e === bridge[i]) return 'O';
      return 'X';
    });

    return lowerPart.join(' | ');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
