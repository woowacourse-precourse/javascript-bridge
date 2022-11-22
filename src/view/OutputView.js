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

  getMapUntilcurrentPosition(map, currentPosition) {
    return Object.values(map.getMap()).slice(0, currentPosition);
  },

  getUpMap(map, currentPosition) {
    return this.getMapUntilcurrentPosition(map, currentPosition).map((stage) => (stage.getMovingCommand() === 'U' ? stage.getStage().U : ' '));
  },

  getDownMap(map, currentPosition) {
    return this.getMapUntilcurrentPosition(map, currentPosition).map((stage) => (stage.getMovingCommand() === 'D' ? stage.getStage().D : ' '));
  },

  printMap(map, currentPosition) {
    // const upMap = map.getUpMap().slice(0, currentPosition);
    // const downMap = map.getDownMap().slice(0, currentPosition);

    // this.getMapUntilcurrentPosition(map, currentPosition).forEach((stage) => {
    //   Console.print(stage.getMovingCommand());
    //   if (stage.getMovingCommand() === 'U') {
    //     upMap;
    //   }
    // });

    Console.print(this.getUpMap(map, currentPosition));
    Console.print(this.getDownMap(map, currentPosition));
    Console.print(`[ ${this.getUpMap(map, currentPosition).join(' | ')} ]\n[ ${this.getDownMap(map, currentPosition).join(' | ')} ]`);
    // Console.print(this.map.getMap()[currentPosition].getStage()[movingCommand]);
    // Console.print(this.map.getMap()[currentPosition].getStage());
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
