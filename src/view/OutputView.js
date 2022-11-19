const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES, ERROR, TYPE } = require('../constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  printStart() {
    Console.print(MESSAGES.GAMESTART);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
   printMap(map) {
    Console.print(`[ ${map[0].join(' | ')} ]`);
    Console.print(`[ ${map[1].join(' | ')} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult(isRight, tryCount, map) {
    Console.print(MESSAGES.RESULT);
    this.printMap(map);
    Console.print(MESSAGES.GAMEDONE(isRight, tryCount));
    Console.close();
  },

  /**
   * 입력값의 에러 타입에 맞는 메세지를 출력한다.
   */
   printError(type) {
    Console.print(`\n${ERROR.PREFIX} ${ERROR[type]}\n`);
    return this.returnCallback(type);
  },

  returnCallback(type) {
    switch(type){
      case(TYPE.SIZE):
        return 'getBridgeLength';
      case(TYPE.STEP):
        return 'getWhereToGo';
      case(TYPE.RETRY):
        return 'getWhatToDo';
    }
  }
};

module.exports = OutputView;
