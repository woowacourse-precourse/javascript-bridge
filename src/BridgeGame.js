const { Console } = require('@woowacourse/mission-utils');
const GameError = require('./Error/GameError');
const Selected = require('./Model/Selected');
const { ERROR_MESSAGE, RETRY_MESSAGE } = require('./utils/Constant');
const InputView = require('./Viewer/InputView');
const OutputView = require('./Viewer/OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #selected;

  constructor() {
    this.#selected = new Selected();
    this.tryCnt = 1;
  }

  resetSelectedAndPlusTryCnt() {
    this.plusTryCnt();
    this.#selected.reset();
  }

  getResult(bridge) {
    for (let i = 0; i < this.#selected.getLength(); i += 1) {
      if (bridge.getBridge(i) !== this.#selected.getElement(i)) return false;
    }
    return true;
  }

  getLevelCnt() {
    return this.#selected.getLength();
  }

  getTryCnt() {
    return this.tryCnt;
  }

  plusTryCnt() {
    this.tryCnt += 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    this.#selected.addElement(input);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input, bridge, game) {
    this.constructor.validate(input);
    if (input === RETRY_MESSAGE.RETRY) {
      game.resetSelectedAndPlusTryCnt();
      InputView.readMoving(bridge, game);
    } else if (input === RETRY_MESSAGE.QUIT) {
      OutputView.printResult(bridge, game);
      Console.close();
    }
  }

  static validate(input) {
    if (input !== RETRY_MESSAGE.RETRY && input !== RETRY_MESSAGE.QUIT)
      throw new GameError(ERROR_MESSAGE.RETRY_INPUT);
  }
}

module.exports = BridgeGame;
