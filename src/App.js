const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
    InputView.readBridgeSize();
    this.exceptionHandlingSize();
    const game = new BridgeGame(InputView.BRIDGE,BridgeMaker.makeBridge(InputView.BRIDGE,BridgeRandomNumberGenerator.generate));
    this.movePlay(game);
    OutputView.printResult(game.up,game.down,game);
  };
}

module.exports = App;
