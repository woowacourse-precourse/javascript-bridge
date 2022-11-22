const Bridge = require("./Bridge");
const View = require("./View");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { MOVE_RESULT, GAME_RESULT } = require("./Constant");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.view = new View();
    this.model = new Bridge();
  }

  start() {
    this.view.printStart();
    this.setBridge();
  }

  /**
   * 사용자가 다리 길이를 설정하는 메서드
   */
  setBridge = () => {
    this.view.readBridgeSize((size) => {
      this.validateSize(parseInt(size));
      const bridge = BridgeMaker.makeBridge(
        parseInt(size),
        BridgeRandomNumberGenerator.generate
      );
      this.model.setBridge(bridge);
      console.log(this.model.bridge);
      this.move();
    });
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move = () => {
    this.view.readMoving((space) => {
      this.model.pushSpace(space);
      console.log(this.model.userSpaces);
      this.moveResult();
    });
  };

  /**
   * 사용자가 이동한 칸의 결과를 보여주고, 결과에 따른 진행.
   */
  moveResult = () => {
    const { firstLine, secondLine } = this.calculateMoveResult(
      this.model.bridge,
      this.model.userSpaces
    );
    this.view.printMap(firstLine, secondLine);
    const result = this.checkContinue(this.model.bridge, this.model.userSpaces);
    if (result === GAME_RESULT.FALSE) return this.retry();
    if (result === GAME_RESULT.CONTINUE) return this.move();
  };

  /**
   * @param {number | NaN} 다리 사이즈
   */
  validateSize = (size) => {
    if (isNaN(size)) {
      this.view.printError("[ERROR] 숫자여야 합니다.");
    }
    if (size > 20 || size < 3) {
      this.view.printError(
        "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다."
      );
    }
  };

  /**
   * @param {string[]} 다리 배열
   * @param {string[]} 사용자 이동 배열
   * @return {Object} 첫번째줄, 두번째줄 출력
   */
  calculateMoveResult = (bridge, userSpaces) => {
    const firstLine = this.calculateFirstLine(bridge, userSpaces);
    const secondLine = this.calculateSecondLine(bridge, userSpaces);
    return { firstLine: firstLine, secondLine: secondLine };
  };

  /**
   * @param {string[]} 다리 배열
   * @param {string[]} 사용자 이동 배열
   * @return {string} 첫번째줄 출력
   */
  calculateFirstLine = (bridge, userSpaces) => {
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
  };

  /**
   * @param {string[]} 다리 배열
   * @param {string[]} 사용자 이동 배열
   * @return {string} 두번째줄 출력
   */
  calculateSecondLine = (bridge, userSpaces) => {
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
  };

  /**
   * @param {string[]} 다리 배열
   * @param {string[]} 사용자 이동 배열
   * @return {string} 계속 진행할지 여부. 계속 진행하면 continue, 게임 실패라면 false, 게임 성공이라면 success로 표현해야 한다.
   */
  checkContinue = (bridge, userSpaces) => {
    const bridgeLength = bridge.length;
    const userSpacesLength = userSpaces.length;
    if (userSpaces[userSpacesLength - 1] !== bridge[userSpacesLength - 1])
      return GAME_RESULT.FALSE;
    if (bridgeLength === userSpacesLength) return GAME_RESULT.SUCCESS;
    return GAME_RESULT.CONTINUE;
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    console.log(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)"
    );
  }
}

module.exports = BridgeGame;