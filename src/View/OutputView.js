const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES: { OUTPUT } } = require('../constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  print(message) {
    Console.print(message);
  },

  printWelcomeMessage() {
    this.print(OUTPUT.WELCOME);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(mapMaker) {
    const bridgeMap = mapMaker.create();

    this.print(`${bridgeMap}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(mapMaker, { isGameClear, tryCount }) {
    const gameClearMessage = {
      true: '성공',
      false: '실패',
    };

    this.print('최종 게임 결과');
    this.printMap(mapMaker);
    this.print(`게임 성공 여부: ${gameClearMessage[isGameClear]}\n총 시도한 횟수: ${tryCount}`);
  },

  printError({ message }) {
    this.print(message);
  },
};

module.exports = OutputView;
