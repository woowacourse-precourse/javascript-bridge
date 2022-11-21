const Bridge = require("./Bridge");
const View = require("./View");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const MOVE_RESULT = require("./Constant");

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

  setBridge = () => {
    this.view.readBridgeSize((size) => {
      const bridge = BridgeMaker.makeBridge(
        size,
        BridgeRandomNumberGenerator.generate
      );
      this.model.setBridge(bridge);
      console.log(this.model.bridge);
      this.move();
    });
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move = () => {
    this.view.readMoving((space) => {
      this.model.pushSpace(space);
      console.log(this.model.userSpaces);
      const { firstLine, secondLine } = this.calculateMoveResult(
        this.model.bridge,
        this.model.userSpaces
      );
      this.view.printMap(firstLine, secondLine);
    });
  };

  calculateMoveResult = (bridge, userSpaces) => {
    const firstLine = this.calculateFirstLine(bridge, userSpaces);
    const secondLine = this.calculateSecondLine(bridge, userSpaces);
    return { firstLine: firstLine, secondLine: secondLine };
  };

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
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
