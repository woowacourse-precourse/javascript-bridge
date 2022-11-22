const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  UP: [],
  DOWN: [],

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(userAnswer) {
    if (userAnswer === 'U') {
      this.UP.push(' O ');
      this.DOWN.push('   ');
    }
    if (userAnswer === 'D') {
      this.UP.push('   ');
      this.DOWN.push(' O ');
    }
    MissionUtils.Console.print(`[${this.UP.join('|')}]\n[${this.DOWN.join('|')}]`);
  },

  printIncorrect(userAnswer) {
    if (userAnswer === 'U') {
      this.UP.push(' X ');
      this.DOWN.push('   ');
    }
    if (userAnswer === 'D') {
      this.UP.push('   ');
      this.DOWN.push(' X ');
    }
    MissionUtils.Console.print(`[${this.UP.join('|')}]\n[${this.DOWN.join('|')}]`);
  },

  removeArray() {
    this.UP = [];
    this.DOWN = [];
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(resultMessage, count) {
    MissionUtils.Console.print('\n최종 게임 결과');
    MissionUtils.Console.print(`[${this.UP.join('|')}]\n[${this.DOWN.join('|')}]`);
    MissionUtils.Console.print(`\n게임 성공 여부: ${resultMessage}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${String(count)}`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
