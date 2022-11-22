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
  printMap(bridge) {
    const { upBridge, downBridge } = this.makeBridge(bridge);
    Console.print(this.makeMap(upBridge));
    Console.print(`${this.makeMap(downBridge)}\n`);
  },
  makeBridge(bridge) {
    const upBridge = this.makeLine(bridge, 'U', 'O');
    const downBridge = this.makeLine(bridge, 'D', 'O');
    return { upBridge, downBridge };
  },
  makeMap(bridge) {
    const printingBridge = `[ ${bridge.join().replace(/,/g, ' | ')} ]`;
    return printingBridge;
  },
  makeLine(bridge, direction, sign) {
    const bridgeLine = bridge.map(block => {
      if (block === direction) {
        return `${sign}`;
      }
      return ' ';
    });
    return bridgeLine;
  },

  makeFailMap(bridge, direction) {
    const { upBridge, downBridge } = this.makeBridge(
      bridge.slice(0, bridge.length),
    );
    const [upBlock, downBlock] = this.makeFailBlock(direction);
    const upLine = [...upBridge, upBlock];
    const downLine = [...downBridge, downBlock];
    return { upLine, downLine };
  },
  makeFailBlock(direction) {
    if (direction === 'U') {
      return ['X', ' '];
    }
    return [' ', 'X'];
  },
  printFailMap(bridge, direction) {
    const { upLine, downLine } = this.makeFailMap(bridge, direction);
    Console.print(this.makeMap(upLine));
    Console.print(`${this.makeMap(downLine)}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(round, bridge) {
    Console.print('최종 게임 결과\n');
    this.printMap(bridge);
    Console.print('게임 성공 여부: 성공\n');
    Console.print(`총 시도한 횟수: ${round}`);
  },
  printFailResult(round, bridge, direction) {
    Console.print('최종 게임 결과\n');
    this.printFailMap(bridge, direction);
    Console.print('게임 성공 여부: 실패\n');
    Console.print(`총 시도한 횟수: ${round}`);
  },
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },
  printError(error) {
    Console.print(error);
  },
  close() {
    Console.close();
  },
};

module.exports = OutputView;
