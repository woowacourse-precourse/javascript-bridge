const MissionUtils = require('@woowacourse/mission-utils');
const inputVIew = require('./InputView');

class App {
  play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    const BRIDGE_SIZE = inputVIew.readBridgeSize();
    console.log(BRIDGE_SIZE);
  }
}

module.exports = App;
