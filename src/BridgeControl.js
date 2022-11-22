const OutputView = require('./IO/OutputView');
const InputView = require('./IO/InputView');
/**
 * @class BridgeGame
 * @desc 다리 게임을 진행하는 클래스
 */
class BridgeControl {
  #bridgeStr;
  intro() {
    OutputView.printStartMessage();
  }

  make(callBack) {
    InputView.readBridgeSize(callBack);
  }

  move(callBack) {
    InputView.readMoving(callBack);
  }

  retry(callBack) {
    InputView.readGameCommand(callBack);
  }
  showBridge(bridge, position) {
    this.#bridgeStr = bridge.getBridgeStr(position);
    OutputView.printMap(this.#bridgeStr);
  }

  End(status, round) {
    OutputView.printResult(status, round, this.#bridgeStr);
  }
}
module.exports = BridgeControl;
