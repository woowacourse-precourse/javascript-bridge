const MissionUtils = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  upperResult: '',
  lowerResult: '',
  upperLog: '',
  lowerLog: '',

  printStartMessage() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(crossingResult, userCommand, tryCount, totalCount) {
    if (totalCount > 1 && tryCount === 1) {
      this.log = '';
    }
    if (tryCount > 1) {
      this.upperResult += ' | ';
      this.lowerResult += ' | ';
    }

    if (userCommand === 'U' && crossingResult === 'O') {
      this.upperResult += 'O';
      this.lowerResult += ' ';
    }
    if (userCommand === 'U' && crossingResult === 'X') {
      this.upperResult += 'X';
      this.lowerResult += ' ';
    }
    if (userCommand === 'D' && crossingResult === 'O') {
      this.upperResult += ' ';
      this.lowerResult += 'O';
    }
    if (userCommand === 'D' && crossingResult === 'X') {
      this.upperResult += ' ';
      this.lowerResult += 'X';
    }
    this.log = `\n[ ${this.upperResult} ]\n[ ${this.lowerResult} ]`;
    MissionUtils.Console.print(this.log);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  printErrorMessages(error) {
    MissionUtils.Console.print(error);
  },
};

module.exports = OutputView;
