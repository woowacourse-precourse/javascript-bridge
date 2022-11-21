const { Console } = require('@woowacourse/mission-utils');
const {
  GAME_STRING,
  GAME_MESSAGE,
  BRIDGE,
  GAME_RESULT_MESSAGE,
} = require('../Constants/constant');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  moveState: [[], []],
  isSuccess: GAME_STRING.blank,
  
  printStart() {
    Console.print(GAME_MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveResult) {
    this.parseResult(moveResult);
    Console.print(`[${this.moveState[BRIDGE.up].join(GAME_STRING.pipeString)}]`);
    Console.print(`[${this.moveState[BRIDGE.down].join(GAME_STRING.pipeString)}]`);
  },

  parseResult(moveResult) {
    const [upOrDown, matchBoolean] = moveResult;
  
    const successOrFail = this.toSuccessOrFail(matchBoolean);
    if (upOrDown === GAME_STRING.upBridge) {
      this.parseUpBridge(successOrFail);
      return;
    }
    this.parseDownBridge(successOrFail);
  },

  toSuccessOrFail(matchBoolean) {
    if (matchBoolean === true) {
      this.isSuccess = GAME_STRING.success;
      return GAME_STRING.successMark;
    }
    this.isSuccess = GAME_STRING.fail;
    return GAME_STRING.failMark;
  },

  parseUpBridge(successOrFail) {
    this.moveState[BRIDGE.up].push(successOrFail);
    this.moveState[BRIDGE.down].push(GAME_STRING.nothingMark);
  },

  parseDownBridge(successOrFail) {
    this.moveState[BRIDGE.up].push(GAME_STRING.nothingMark);
    this.moveState[BRIDGE.down].push(successOrFail);
  },

  resetPrintData() {
    this.isSuccess = GAME_STRING.blank;
    this.moveState = [[], []];
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(retryCount) {
    Console.print(
      GAME_RESULT_MESSAGE(this.moveState, this.isSuccess, retryCount)
    );
    Console.close();
  },
};

module.exports = OutputView;
