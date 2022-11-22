const Utils = require('../Utils/Utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = Object.freeze({
  GAME_OUTPUT_MESSAGES: {
    START: '다리 건너기 게임을 시작합니다.',
    GAME_RESULT: '최종 게임 결과',
    GAME_SUCCESS: '게임 성공 여부:',
    SUCCESS: '성공',
    FAIL: '실패',
    TRY: '총 시도한 횟수:',
  },

  printStart() {
    Utils.print(this.GAME_OUTPUT_MESSAGES.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    const [up, down] = map;
    Utils.print(`[${up.join('')}]\n[${down.join('')}]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, tryOfNUmber, success) {
    const isSuccess = success ? this.GAME_OUTPUT_MESSAGES.SUCCESS : this.GAME_OUTPUT_MESSAGES.FAIL;
    Utils.print(this.GAME_OUTPUT_MESSAGES.GAME_RESULT);
    OutputView.printMap(map);
    Utils.print(
      `${this.GAME_OUTPUT_MESSAGES.GAME_SUCCESS} ${isSuccess}\n${this.GAME_OUTPUT_MESSAGES.TRY} ${tryOfNUmber}`,
    );
  },
});

module.exports = OutputView;
