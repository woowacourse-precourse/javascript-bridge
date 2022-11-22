/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  outputGameStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },
};

module.exports = OutputView;
