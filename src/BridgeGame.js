const Validation = require("./Validation");
const GameManager = require("./GameManager");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #originBridges
  #bridges
  #userSelectSpace
  #firstRow
  #secondRow

  constructor() {
    this.gameManager = new GameManager();
  }

  openBridgeRow() {
    this.#firstRow = ['['];
    this.#secondRow = ['['];
  }

  closeBridgeRow() {
    this.#firstRow.push(']');
    this.#secondRow.push(']');
  }

  addResultInRow(a, b) {
    this.#firstRow.push(a);
    this.#secondRow.push(b);
  }

  start() {
    this.gameManager.inputBridgeSize(this.getBridge.bind(this));
  }

  getBridge(bridge) {
    this.#bridges = bridge;
    this.#originBridges = bridge;
    console.log(this.#bridges);
    this.openBridgeRow();
    this.inputSpace();
  }
  
  inputSpace() {
    this.gameManager.inputMovingSpace(this.move.bind(this));
  }

  move(userSelectSpace) {
    const bridge = [...this.#bridges];
    const bridgeSpace = bridge[0];
    this.checkSpace(bridgeSpace, userSelectSpace);
    this.gameManager.printSpace(this.#firstRow, this.#secondRow);
    bridge.shift();
    this.checkBridge(bridge);
  }

  checkSpace(bridge, user) {
    if (bridge === user && 'U' === user) this.addResultInRow(0,' ');
    if (bridge === user && 'D' === user) this.addResultInRow(' ', 0);
    if (bridge !== user && bridge === 'U') this.addResultInRow(' ', 'X');
    if (bridge !== user && bridge === 'D') this.addResultInRow('X', ' ');
    this.closeBridgeRow();
  }

  checkBridge(bridge) {
    if (this.#firstRow.includes("X") === true || this.#secondRow.includes("X") === true) {
      return this.retry();
    }

    if (bridge.length === 0) {
      return this.finish();  
    }

    this.addPartition(bridge);
  }

  addPartition(bridge) {
    this.#firstRow.splice(-1,1,'|');
    this.#secondRow.splice(-1,1,'|');
    this.#bridges = bridge;
    this.inputSpace();
  }

  addResultInRow(a, b) {
    this.#firstRow.push(a);
    this.#secondRow.push(b);
  }
}

module.exports = BridgeGame;
