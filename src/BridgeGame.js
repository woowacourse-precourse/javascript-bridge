const Validation = require("./Validation");
const GameManager = require("./GameManager");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridges

  constructor() {
    this.gameManager = new GameManager();
  }

  start() {
    this.gameManager.inputBridgeSize(this.getBridge.bind(this));
  }

  getBridge(bridge) {
    this.#bridges = bridge;
    this.getSpace();
  }  
  
  getSpace() {
    this.gameManager.inputMovingSpace(this.move.bind(this));
  }

  move(space) {
    console.log(space);
  }


}

module.exports = BridgeGame;
