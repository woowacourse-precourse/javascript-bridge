const { Console } = require('@woowacourse/mission-utils');
const {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  RETRY_MESSAGE,
} = require('./utils/Constant');
const InputView = require('./Viewer/InputView');
const OutputView = require('./Viewer/OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #selected;

  constructor() {
    this.#selected = [];
    this.tryCnt = 1;
  }

  static validate(input) {
    if (input !== INPUT_MESSAGE.UP && input !== INPUT_MESSAGE.DOWN) {
      throw new Error(ERROR_MESSAGE.LEVEL_INPUT);
    }
  }

  resetSelectedAndPlusTryCnt() {
    this.plusTryCnt();
    this.#selected = '';
  }

  getSelected(i) {
    return this.#selected[i];
  }

  getLength() {
    return this.#selected.length;
  }

  getResult(bridge) {
    for (let i = 0; i < this.getLength(); i += 1) {
      if (bridge.getBridge(i) !== this.getSelected(i)) return false;
    }
    return true;
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
    this.constructor.validate(input);
    this.#selected.push(input);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input, bridge, game) {
    this.constructor.validateRetryInput(input);
    if (input === RETRY_MESSAGE.RETRY) {
      game.resetSelectedAndPlusTryCnt();
      InputView.readMoving(bridge, game);
    } else if (input === RETRY_MESSAGE.QUIT) {
      OutputView.printResult(bridge, game);
      Console.close();
    }
  }

  static validateRetryInput(input) {
    if (input !== RETRY_MESSAGE.RETRY && input !== RETRY_MESSAGE.QUIT)
      throw new Error('[ERROR] R 또는 Q를 입력해야합니다.');
  }
}

module.exports = BridgeGame;
