const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #bridgeGame;

  play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
    this.#getBridgeSize();
  }

  #getBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      this.#bridgeGame = new BridgeGame(bridgeSize);
    });
  }
}

module.exports = App;
