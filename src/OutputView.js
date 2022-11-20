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
  printMap() {},

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
  },

  printStartMessage(){
    Console.print('다리 건너기 게임을 시작합니다.');
  },
  printInputLengthMessage() {
    Console.print('다리의 길이를 입력해주세요.');
  },
  printUserInput(input) {
    Console.print(`${input}`);
  },
  printChooseSectionMessage() {
    Console.print('이동할 칸을 선택해주세요. (위: U, 아래: D)');
  },
  printGameRestartMessage() {
    Console.print('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)');
  },
  printGameResult(result) {
    Console.print(`게임 성공 여부: ${result}`);
  },
  printGameTryCount(count) {
    Console.print(`총 시도한 횟수: ${count}`);
  },
};

module.exports = OutputView;
