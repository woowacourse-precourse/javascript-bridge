const {BRIDGE, MESSAGE} = require('./const');
const {Console} = require("@woowacourse/mission-utils");

const OutputView = {
  displayMessage(message) {
    Console.print(message);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string[]} bridge 다리 모양
   * @param {boolean[]} isSuccessArray 사용자의 입력과 다리 모양 일치 여부 배열
   */
  printMap(bridge, isSuccessArray) {
    const location = isSuccessArray.length;
    this.printBridgeUpper(bridge, location, isSuccessArray[location-1]);
    this.printBridgeLowwer(bridge, location, isSuccessArray[location-1]);
  },

  /**
   * 현재까지 이동한 다리의 윗부분을 정해진 형식에 맞춰 출력한다.
   * @param {string[]} bridge 다리 모양
   * @param {number} location 현재 사용자가 위치한 칸
   * @param {boolean[]} isSuccessArray 사용자의 입력과 다리 모양 일치 여부 배열
   */
  printBridgeUpper(bridge, location, isSuccess) {
    let upperMap = BRIDGE.LEFT_SIDE;
    upperMap += this.getBridgeUpperBody(bridge, location, isSuccess);
    upperMap += BRIDGE.RIGHT_SIDE;
    Console.print(upperMap);
  },

  /**
   * @param {string[]} bridge 다리 모양
   * @param {number} location 현재 사용자가 위치한 칸
   * @param {boolean[]} isSuccessArray 사용자의 입력과 다리 모양 일치 여부 배열
   * @return {string} 현재까지 이동한 다리의 윗부분의 본체 부분 문자열
   */
  getBridgeUpperBody(bridge, location, isSuccess) {
    let upperBody = ""
    for (let index = 0; index < location-1; index++) {
      bridge[index] == BRIDGE.INPUT_RANGE[0] ? upperBody += BRIDGE.MOVE_SUCCESS : upperBody += BRIDGE.EMPTY;
      upperBody += BRIDGE.DELIMITER;
    }
    if( isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[0]) upperBody += BRIDGE.MOVE_SUCCESS;
    if(!isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[0]) upperBody += BRIDGE.EMPTY;
    if( isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[1]) upperBody += BRIDGE.EMPTY;
    if(!isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[1]) upperBody += BRIDGE.MOVE_FAIL;
    return upperBody;
  },

  /**
   * 현재까지 이동한 다리의 아래부분을 정해진 형식에 맞춰 출력한다.
   * @param {string[]} bridge 다리 모양
   * @param {number} location 현재 사용자가 위치한 칸
   * @param {boolean[]} isSuccessArray 사용자의 입력과 다리 모양 일치 여부 배열
   */
  printBridgeLowwer(bridge, location, isSuccess) {
    let lowwerMap = BRIDGE.LEFT_SIDE;
    lowwerMap += this.getBridgeLowwerBody(bridge, location, isSuccess);
    lowwerMap += BRIDGE.RIGHT_SIDE;
    Console.print(lowwerMap+'\n');
  },
  /**
   * @param {string[]} bridge 다리 모양
   * @param {number} location 현재 사용자가 위치한 칸
   * @param {boolean[]} isSuccessArray 사용자의 입력과 다리 모양 일치 여부 배열
   * @return {string} 현재까지 이동한 다리의 아래부분의 본체 부분 문자열
   */
  getBridgeLowwerBody(bridge, location, isSuccess) {
    let lowwerBody = "";
    for (let index = 0; index < location-1; index++) {
      bridge[index] == BRIDGE.INPUT_RANGE[1] ? lowwerBody += BRIDGE.MOVE_SUCCESS : lowwerBody += BRIDGE.EMPTY;
      lowwerBody += BRIDGE.DELIMITER;
    }
    if( isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[1]) lowwerBody += BRIDGE.MOVE_SUCCESS;
    if(!isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[1]) lowwerBody += BRIDGE.EMPTY;
    if( isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[0]) lowwerBody += BRIDGE.EMPTY;
    if(!isSuccess && bridge[location-1] == BRIDGE.INPUT_RANGE[0]) lowwerBody += BRIDGE.MOVE_FAIL;
    return lowwerBody;
  },

  /**
   * @param {string[]} bridge 다리 모양
   * @param {boolean[]} isSuccessArray 사용자의 입력과 다리 모양 일치 여부 배열
   * @param {number} totalAttempt 사용자가 총 시도한 횟수
   */
  printResult(bridge, isSuccessArray, totalAttempt) {
    const location = isSuccessArray.length;
    Console.print(MESSAGE.FINAL_RESULT);
    this.printMap(bridge, isSuccessArray);
    Console.print("");
    this.printIsWin(isSuccessArray[location-1]);
    this.printTotalAttempt(totalAttempt);
    Console.close();
  },
  /**
   * @param {boolean} isWin 사용자의 게임 성공/실패 여부
   */
  printIsWin(isWin) {
    let isWinString = MESSAGE.IS_WIN;
    if( isWin) isWinString += MESSAGE.WIN;
    if(!isWin) isWinString += MESSAGE.LOSS;
    Console.print(isWinString);
  },
  /**
   * @param {number} totalAttempt 사용자가 총 시도한 횟수
   */
  printTotalAttempt(totalAttempt) {
    let totalAttemptString = MESSAGE.ATTEMPT_TIMES + totalAttempt;
    Console.print(totalAttemptString);
  }
};

module.exports = OutputView;