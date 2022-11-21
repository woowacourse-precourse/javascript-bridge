const { Console } = require("@woowacourse/mission-utils");

const GAME_START_SENTENCE = '다리 건너기 게임을 시작합니다.\n'
const END_RESULT_SENTENCE = '\n최종 게임 결과';
const SUCCESS_OR_FAILURE_SENTENCE = '\n게임 성공 여부: ';
const TOTAL_COUNT_SENTENCE = '총 시도한 횟수: ';

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작 멘트를 출력한다.
   */
  gameStart() {
    Console.print(GAME_START_SENTENCE);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * 
   * bridge = ['U', 'U', 'D'];
   * result = [['U', 'success'], ['D', 'fail']];
   */
  printMap(bridgeGame) {
    Console.print(`[${bridgeGame.nowMap['U'].join('|')}]`);
    Console.print(`[${bridgeGame.nowMap['D'].join('|')}]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame, result) {
    Console.print(END_RESULT_SENTENCE);

    this.printMap(bridgeGame);

    const strResult = result === 'success' ? '성공' : '실패';
    Console.print(SUCCESS_OR_FAILURE_SENTENCE + strResult);

    Console.print(TOTAL_COUNT_SENTENCE);
    Console.close()
  },
};

module.exports = OutputView;
