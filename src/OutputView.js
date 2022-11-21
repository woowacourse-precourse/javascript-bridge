const {BRIDGE, MESSAGE} = require('./const');
const {Console} = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 * 파일 경로 변경 가능
 * 메소드 이릅 변경 불가
 * 인자 추가/변경 가능
 * 값 출력을 위한 메서드 추가 가능
 */
const OutputView = {
  displayMessage(message) {
    Console.print(message);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, location, isSuccess) {
    this.printBridgeUpper(bridge, location, isSuccess);
    this.printBridgeLowwer(bridge, location, isSuccess);
  },

  printBridgeUpper(bridge, location, isSuccess) {
    let upperMap = BRIDGE.LEFT_SIDE;
    upperMap += this.getBridgeUpperBody(bridge, location, isSuccess);
    upperMap += BRIDGE.RIGHT_SIDE;
    Console.print(upperMap);
  },

  getBridgeUpperBody(bridge, location, isSuccess) {
    let upperBody = "";
    for (let index = 0; index < location-1; index++) {
      if(bridge[index] == BRIDGE.INPUT_RANGE[0]) upperBody += BRIDGE.MOVE_SUCCESS;
      if(bridge[index] == BRIDGE.INPUT_RANGE[1]) upperBody += BRIDGE.EMPTY;
      upperBody += BRIDGE.DELIMITER;
    }
    if( isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[0]) upperBody += BRIDGE.MOVE_SUCCESS;
    if(!isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[0]) upperBody += BRIDGE.MOVE_FAIL;
    if(bridge[location-1] == BRIDGE.INPUT_RANGE[1]) upperBody += BRIDGE.EMPTY;
    return upperBody;
  },

  printBridgeLowwer(bridge, location, isSuccess) {
    let lowwerMap = BRIDGE.LEFT_SIDE;
    lowwerMap += this.getBridgeLowwerBody(bridge, location, isSuccess);
    lowwerMap += BRIDGE.RIGHT_SIDE;
    Console.print(lowwerMap);
  },

  getBridgeLowwerBody(bridge, location, isSuccess) {
    let lowwerBody = "";
    for (let index = 0; index < location-1; index++) {
      if(bridge[index] == BRIDGE.INPUT_RANGE[1]) lowwerBody += BRIDGE.MOVE_SUCCESS;
      if(bridge[index] == BRIDGE.INPUT_RANGE[0]) lowwerBody += BRIDGE.EMPTY;
      lowwerBody += BRIDGE.DELIMITER;
    }
    if( isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[1]) lowwerBody += BRIDGE.MOVE_SUCCESS;
    if(!isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[1]) lowwerBody += BRIDGE.MOVE_FAIL;
    if(bridge[location-1] == BRIDGE.INPUT_RANGE[0]) lowwerBody += BRIDGE.EMPTY;
    return lowwerBody;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, location, isSuccess, totalAttempt) {
    Console.print(MESSAGE.FINAL_RESULT);
    this.printMap(bridge, location, isSuccess);
    Console.print("");
    this.printIsWin(isSuccess);
    this.printTotalAttempt(totalAttempt);    
  },

  printIsWin(isWin) {
    let isWinString = MESSAGE.IS_WIN;
    if( isWin) isWinString += MESSAGE.WIN;
    if(!isWin) isWinString += MESSAGE.LOSS;
    Console.print(isWinString);
  },

  printTotalAttempt(totalAttempt) {
    let totalAttemptString = MESSAGE.ATTEMPT_TIMES + totalAttempt;
    Console.print(totalAttemptString);
  }
};

module.exports = OutputView;

const bridge = ["U", "D", "D", "U"];
const location = 4;
const isSuccess = true;

OutputView.printResult(bridge, location, isSuccess, 4);
Console.close();