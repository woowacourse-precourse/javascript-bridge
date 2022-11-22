const Bridge = require("./Bridge");
const View = require("./View");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { GAME_RESULT } = require("./Constant");
const gameUtils = require("./GameUtils");

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
      gameUtils.validateSize(parseInt(size), this.view);
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
    const { firstLine, secondLine } = gameUtils.calculateMoveResult(
      this.model.bridge,
      this.model.userSpaces
    );
    this.view.printMap(firstLine, secondLine);
    const result = gameUtils.checkContinue(
      this.model.bridge,
      this.model.userSpaces
    );
    if (result === GAME_RESULT.FALSE) return this.retry();
    if (result === GAME_RESULT.CONTINUE) return this.move();
    return this.end();
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.view.readGameCommand((command) => {
      gameUtils.validateCommand(command, this.view);
      if (command === "R") {
        this.model.initSpace();
        return this.move();
      }
      return this.end();
    });
  }

  end() {
    console.log("최종 게임 결과");
  }
}

module.exports = BridgeGame;