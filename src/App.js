import Console from "@woowacourse/mission-utils";
import BridgeMaker from "./BridgeMaker";
import InputView from "./InputView";

class App {
  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    InputView.readBridgeSize();
  }
}

module.exports = App;
