const { MOVE_RESULT, GAME_RESULT } = require("../Constant");

const gameUtils = {
  /**
   * @param {number | NaN} size 다리 사이즈
   * @param {object} view object
   */
  validateSize: (size, view) => {
    if (isNaN(size)) {
      view.printError("[ERROR] 숫자여야 합니다.");
    }
    if (size > 20 || size < 3) {
      view.printError("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },

  /**
   * @param {string[]} bridge 다리 배열
   * @param {string[]} userSpaces 사용자 이동 배열
   * @return {Object} 첫번째줄, 두번째줄 출력
   */
  calculateMoveResult: (bridge, userSpaces) => {
    const firstLine = gameUtils.calculateFirstLine(bridge, userSpaces);
    const secondLine = gameUtils.calculateSecondLine(bridge, userSpaces);
    return { firstLine: firstLine, secondLine: secondLine };
  },

  /**
   * @param {string[]} bridge 다리 배열
   * @param {string[]} userSpaces 사용자 이동 배열
   * @return {string} 첫번째줄 출력
   */
  calculateFirstLine: (bridge, userSpaces) => {
    let firstLine = MOVE_RESULT.START_SPACE;
    for (let i = 0; i < userSpaces.length; i++) {
      if (i !== 0) firstLine += MOVE_RESULT.CONTINUE_SPACE;
      if (userSpaces[i] === "U" && bridge[i] === "U")
        firstLine += MOVE_RESULT.RIGHT;
      if (userSpaces[i] === "U" && bridge[i] === "D")
        firstLine += MOVE_RESULT.WRONG;
      if (userSpaces[i] === "D") firstLine += MOVE_RESULT.NONE;
    }
    return firstLine + MOVE_RESULT.END_SPACE;
  },

  /**
   * @param {string[]} bridge 다리 배열
   * @param {string[]} userSpaces 사용자 이동 배열
   * @return {string} 두번째줄 출력
   */
  calculateSecondLine: (bridge, userSpaces) => {
    let secondLine = MOVE_RESULT.START_SPACE;
    for (let i = 0; i < userSpaces.length; i++) {
      if (i !== 0) secondLine += MOVE_RESULT.CONTINUE_SPACE;
      if (userSpaces[i] === "D" && bridge[i] === "U")
        secondLine += MOVE_RESULT.WRONG;
      if (userSpaces[i] === "D" && bridge[i] === "D")
        secondLine += MOVE_RESULT.RIGHT;
      if (userSpaces[i] === "U") secondLine += MOVE_RESULT.NONE;
    }
    return secondLine + MOVE_RESULT.END_SPACE;
  },

  /**
   * @param {string[]} bridge 다리 배열
   * @param {string[]} userSpaces 사용자 이동 배열
   * @return {string} 계속 진행할지 여부. 계속 진행하면 continue, 게임 실패라면 false, 게임 성공이라면 success로 표현해야 한다.
   */
  checkContinue: (bridge, userSpaces) => {
    const bridgeLength = bridge.length;
    const userSpacesLength = userSpaces.length;
    if (userSpaces[userSpacesLength - 1] !== bridge[userSpacesLength - 1])
      return GAME_RESULT.FALSE;
    if (bridgeLength === userSpacesLength) return GAME_RESULT.SUCCESS;
    return GAME_RESULT.CONTINUE;
  },

  /**
   * @param {string} command 게임 다시 시도 여부 입력, R 또는 Q가 아닐 경우 ERROR 메시지 출력.
   * @param {object} view object
   */
  validateCommand: (command, view) => {
    if (command !== "R" && command !== "Q")
      view.printError("[ERROR] 입력한 값이 R 또는 Q가 아닙니다.");
  },
};

module.exports = gameUtils;
