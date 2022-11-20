const { Console } = require("@woowacourse/mission-utils");
const BRIDGE = require("./constant/constants");
const MESSAGE = require("./constant/message");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  recentBridgePrint: [],

  printStartMessage() {
    Console.print(MESSAGE.START_GAME + "\n");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(position, bridge, answer) {
    Console.print(this.createUpBridgeTemplate(position, bridge, answer));
    Console.print(this.createDownBridgeTemplate(position, bridge, answer));
  },

  createUpBridgeTemplate(position, bridge, answer) {
    const upBridge = bridge.slice(0, position).map((cell) => (cell === BRIDGE.KEYWORDS.UP ? "O" : " "));

    if (bridge[position] === BRIDGE.KEYWORDS.UP && answer === BRIDGE.KEYWORDS.UP) upBridge.push("O");

    if (bridge[position] !== BRIDGE.KEYWORDS.UP && answer === BRIDGE.KEYWORDS.UP) upBridge.push("X");

    if (answer !== BRIDGE.KEYWORDS.UP) upBridge.push(" ");

    return `[ ${upBridge.join(" | ")} ]`;
  },

  createDownBridgeTemplate(position, bridge, answer) {
    const downBridge = bridge.slice(0, position).map((cell) => (cell === BRIDGE.KEYWORDS.DOWN ? "O" : " "));

    if (bridge[position] === BRIDGE.KEYWORDS.DOWN && answer === BRIDGE.KEYWORDS.DOWN) downBridge.push("O");

    if (bridge[position] !== BRIDGE.KEYWORDS.DOWN && answer === BRIDGE.KEYWORDS.DOWN) downBridge.push("X");

    if (answer !== BRIDGE.KEYWORDS.DOWN) downBridge.push(" ");

    return `[ ${downBridge.join(" | ")} ]`;
  },

  setRecentBridgePrint(position, bridge, answer) {
    this.recentBridgePrint = [this.createUpBridgeTemplate(position, bridge, answer), this.createDownBridgeTemplate(position, bridge, answer)];
  },

  printRecentBridgePrint(recentBridgePrint) {
    const [upBridgeTemplate, downBridgeTemplate] = recentBridgePrint;

    Console.print(upBridgeTemplate);
    Console.print(downBridgeTemplate);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printGameResult(answer, tryTimes) {
    Console.print(MESSAGE.GAME_RESULT);
    this.printRecentBridgePrint(this.recentBridgePrint);
    this.printGameSuccessOrNot(answer);
    Console.print(MESSAGE.TRY_TIMES(tryTimes));
  },

  printGameSuccessOrNot(answer) {
    Console.print(answer === BRIDGE.KEYWORDS.QUIT ? MESSAGE.GAME_FAIL : MESSAGE.GAME_SUCEESS);
  },
};

module.exports = OutputView;
