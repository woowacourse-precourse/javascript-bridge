const MissionUtils = require('@woowacourse/mission-utils');
const InputVIew = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    const BRIDGE_SIZE = InputVIew.readBridgeSize();
    if (BRIDGE_SIZE === -1) {
      return 0;
    }
    const BRIDGE = BridgeMaker.makeBridge(
      BRIDGE_SIZE,
      BridgeRandomNumberGenerator.generate
    );
    new BridgeGame(BRIDGE_SIZE, BRIDGE);
    MissionUtils.Console.close();
  }
}

module.exports = App;
