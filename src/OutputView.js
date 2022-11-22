const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, bridgeStack) {
    const map = [[], []];
    bridgeStack.forEach((dir, idx) => {
      const isRight = bridge[idx] === dir;
      if (dir === 'U' && isRight) this.pushOUp(map);
      if (dir === 'U' && !isRight) this.pushXUp(map);
      if (dir === 'D' && isRight) this.pushODown(map);
      if (dir === 'D' && !isRight) this.pushXDown(map);
    });
    Console.print(`[ ${map[0].join(' | ')} ]`);
    Console.print(`[ ${map[1].join(' | ')} ]`);
  },

  pushOUp(map) {
    map[0].push('O');
    map[1].push(' ');
  },

  pushXUp(map) {
    map[0].push('X');
    map[1].push(' ');
  },

  pushODown(map) {
    map[0].push(' ');
    map[1].push('O');
  },

  pushXDown(map) {
    map[0].pish(' ');
    map[1].push('X');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, bridgeStack, success, cnt) {
    Console.print(MESSAGE.GAME.RESULT);
    this.printMap(bridge, bridgeStack);
    Console.print(`${MESSAGE.GAME.SUCCESS}${success ? '성공' : '실패'}`);
    Console.print(`${MESSAGE.GAME.TRY}${cnt}`);
  },
};

module.exports = OutputView;
