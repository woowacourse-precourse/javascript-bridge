const MissionUtils = require('@woowacourse/mission-utils');
const InputVIew = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    const BRIDGE_SIZE = InputVIew.readBridgeSize();
    const BRIDGE = BridgeMaker.makeBridge(
      BRIDGE_SIZE,
      BridgeRandomNumberGenerator.generate
    );
    console.log('briddddddddddddddge', BRIDGE);
  }
}

module.exports = App;
