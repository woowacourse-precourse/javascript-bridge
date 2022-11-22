const InputValidation = {
  /**
   * 플레이어가 입력한 다리의 길이가 정수인지 검사하는 메서드
   * @param {number} bridgeSize 플레이어가 입력한 다리의 길이
   */
  isBridgeSizeInteger(bridgeSize) {
    if (!Number.isInteger(bridgeSize)) throw new Error('[ERROR] 다리의 길이는 정수만 입력이 가능합니다.');
  },

  /**
   * 플레이어가 입력한 다리의 길이가 3 이상 20 이하의 숫자인지 검사하는 메서드
   * @param {number} bridgeSize 플레이어가 입력한 다리의 길이
   */
  isBridgeSizeInRange(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) throw new Error('[ERROR] 다리의 길이는 3 이상 20 이하의 숫자만 입력이 가능합니다.');
  },

  /**
   * 플레이어가 입력한 이동 명령이 유효한지 검사하는 메서드
   * @param {string} movement 플레이어가 입력한 입력 명령
   */
  isMovementAvailable(movement) {
    if (movement !== 'U' && movement !== 'D') throw new Error('[ERROR] 이동할 칸은 U 또는 D만 입력이 가능합니다.');
  },

  /**
   * 플레이어가 입력한 게임 재시작 및 종료 명령이 유효한지 검사하는 메서드
   * @param {string} restartOrQuit 플레이어가 입력한 게임 재시작 및 종료 명령
   */
  isGameCommandAvailable(restartOrQuit) {
    if (restartOrQuit !== 'R' && restartOrQuit !== 'Q') throw new Error('[ERROR] 게임 재시작 명령은 R 또는 Q만 입력이 가능합니다.');
  },
};

module.exports = InputValidation;
