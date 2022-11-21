const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  INPUT_ERROR_TEXT: '[ERROR] 문자열을 입력해야 합니다.',
  message: {
    START: '다리 건너기 게임을 시작합니다.\n',
    LENGTH: '다리의 길이를 입력해주세요.\n',
    MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
    FINAL: '최종 게임 결과',
  },

  validate(text) {
    if (!text) {
      throw new Error(this.INPUT_ERROR_TEXT);
    }
  },

  print(text = '') {
    this.validate(text);
    MissionUtils.Console.print(text);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeLog) {
    const framework = (bridge) => {
      const SEPARATOR = ' | ';

      return `[ ${bridge.join(SEPARATOR)} ]`;
    };

    bridgeLog.forEach((bridge) => this.print(framework(bridge)));
  },

  finalGameResult(bridgeLog) {
    this.print(this.message.FINAL);
    this.printMap(bridgeLog);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(successOrFailure, tryCount) {
    const SUCCESS = '성공';
    const FAILURE = '실패';

    this.print(`게임 성공 여부: ${successOrFailure ? SUCCESS : FAILURE}\n총 시도한 횟수: ${tryCount}`);
  },
};

module.exports = OutputView;
