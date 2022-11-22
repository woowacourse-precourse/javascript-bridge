const GameManager = require("./GameManager");
const { BRIDGE_ROW, BRIDGE_CHECK, GAME_COMMAND, GAME_RESULT } = require("./utils/Constants");

class BridgeGame {
  #originBridges
  #bridges
  #upRow
  #downRow
  #count
  #result


  constructor() {
    this.gameManager = new GameManager();
  }

  openBridgeRow() {
    this.#upRow = [BRIDGE_ROW.open];
    this.#downRow = [BRIDGE_ROW.open];
  }

  closeBridgeRow() {
    this.#upRow.push(BRIDGE_ROW.close);
    this.#downRow.push(BRIDGE_ROW.close);
  }

  addResultInRow(a, b) {
    this.#upRow.push(a);
    this.#downRow.push(b);
  }

  start() {
    this.gameManager.inputBridgeSize(this.getBridge.bind(this));
    this.#count = 1;
  }

  getBridge(bridges) {
    this.#bridges = bridges;
    this.#originBridges = bridges;
    this.openBridgeRow();
    this.setLine();
  }

  setLine() {
    this.gameManager.printBlankLine();
    this.inputSpace();
  }
  
  inputSpace() {
    this.gameManager.inputMovingSpace(this.move.bind(this));
  }

  move(userSelectSpace) {
    const bridge = [...this.#bridges];
    const bridgeSpace = bridge[0];
    this.checkSpace(bridgeSpace, userSelectSpace);
    bridge.shift();
    this.checkBridge(bridge);
  }

  checkSpace(bridge, user) {
    if (bridge === user && GAME_COMMAND.up === user) this.addResultInRow(BRIDGE_CHECK.correct, BRIDGE_CHECK.blank);
    if (bridge === user && GAME_COMMAND.down === user) this.addResultInRow(BRIDGE_CHECK.blank, BRIDGE_CHECK.correct);
    if (bridge !== user && bridge === GAME_COMMAND.up) this.addResultInRow(BRIDGE_CHECK.blank, BRIDGE_CHECK.wrong);
    if (bridge !== user && bridge === GAME_COMMAND.down) this.addResultInRow(BRIDGE_CHECK.wrong, BRIDGE_CHECK.blank);

    this.closeBridgeRow();
  }

  checkBridge(bridge) {
    this.gameManager.printRow(this.#upRow, this.#downRow);

    if (this.#upRow.includes(BRIDGE_CHECK.wrong) || this.#downRow.includes(BRIDGE_CHECK.wrong)) {
      return this.inputRetry();
    }

    if (bridge.length === 0) {
      return this.finish();  
    }

    this.addPartition(bridge);
  }

  addPartition(bridge) {
    this.#upRow.splice(-1,1, BRIDGE_ROW.partition);
    this.#downRow.splice(-1,1, BRIDGE_ROW.partition);
    this.#bridges = bridge;

    this.inputSpace();
  }

  addResultInRow(a, b) {
    this.#upRow.push(a);
    this.#downRow.push(b);
  }

  inputRetry() {
    this.gameManager.inputRetry(this.checkRetry.bind(this));
  }

  checkRetry(command) {
    if (command === GAME_COMMAND.retry) {
      this.#count += 1;
      this.retry();
      return;
    }

    this.#result = GAME_RESULT.fail;
    this.printFinalResult();
  }

  retry() {
    this.#bridges = this.#originBridges;
    this.openBridgeRow();
    this.inputSpace();
  }

  finish() {
    this.#result = GAME_RESULT.success;
    this.printFinalResult();
  }

  printFinalResult() {
    this.gameManager.printResult(this.#upRow, this.#downRow);
    this.gameManager.printInfo(this.#count, this.#result);
  }
}

module.exports = BridgeGame;
