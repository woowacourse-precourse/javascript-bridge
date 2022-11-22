const Bridge = require("../model/Bridge");
const View = require("../view/View");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../utils/BridgeRandomNumberGenerator");
const { GAME_RESULT } = require("../Constant");
const gameUtils = require("../utils/GameUtils");

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
      this.move();
    });
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move = () => {
    this.view.readMoving((space) => {
      this.model.pushSpace(space);
      this.moveResult();
    });
  };

  /**
   * 사용자가 이동한 칸의 결과를 보여주고, 결과에 따른 진행.
   */
  moveResult = () => {
    const map = gameUtils.calculateMoveResult(
      this.model.bridge,
      this.model.userSpaces
    );
    this.view.printMap(map);
    const result = gameUtils.checkContinue(
      this.model.bridge,
      this.model.userSpaces
    );
    if (result === GAME_RESULT.FALSE) return this.retry(result);
    if (result === GAME_RESULT.CONTINUE) return this.move();
    return this.end(result);
  };

  /**
   * @param {string} result 게임 결과, "success" or "false"
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry(result) {
    this.view.readGameCommand((command) => {
      gameUtils.validateCommand(command, this.view);
      if (command === "R") {
        this.model.initSpace();
        this.model.addCount();
        return this.move();
      }
      return this.end(result);
    });
  }

  /**
   * @param {string} result 게임 결과, "success" or "false"
   * 게임이 종료되었을 때 결과를 출력하는 메서드
   */
  end(result) {
    this.model.addCount();
    const map = gameUtils.calculateMoveResult(
      this.model.bridge,
      this.model.userSpaces
    );
    this.view.printResult(map, result, this.model.count);
  }
}

module.exports = BridgeGame;
