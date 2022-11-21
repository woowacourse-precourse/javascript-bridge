import BridgeGame from "./BridgeGame";
import { readBridgeSize } from "./InputView";
const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    const bridgeGame = new BridgeGame();
    readBridgeSize(bridgeGame);
  }
}

module.exports = App;
