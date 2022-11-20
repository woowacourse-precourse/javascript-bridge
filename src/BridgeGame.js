const { Console } = require('@woowacourse/mission-utils');
const GameError = require('./Error/GameError');
// const Selected = require('./Model/Selected');
// const TryCnt = require('./Model/TryCnt');
const {
  ERROR_MESSAGE,
  RETRY_MESSAGE,
  INPUT_MESSAGE,
} = require('./utils/Constant');
const InputView = require('./Viewer/InputView');
const OutputView = require('./Viewer/OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #selected;

  #tryCnt;

  constructor(selected, tryCnt) {
    this.#selected = selected;
    this.#tryCnt = tryCnt;
    this.result = Array.from({ length: 2 }, () => []);
  }

  static validate(input) {
    if (input !== RETRY_MESSAGE.RETRY && input !== RETRY_MESSAGE.QUIT)
      throw new GameError(ERROR_MESSAGE.RETRY_INPUT);
  }

  setInitialResultMap() {
    const length = this.#selected.getLength();
    this.result = Array.from({ length: 2 }, () =>
      Array.from({ length }, () => undefined),
    );
  }

  resetSelectedAndPlusTryCnt() {
    this.#selected.reset();
    this.#tryCnt.add();
  }

  getResult(bridge) {
    for (let i = 0; i < this.#selected.getLength(); i += 1) {
      if (bridge.getBridge(i) !== this.#selected.getElement(i)) return false;
    }
    return true;
  }

  getResultMap(bridge) {
    this.setResultMap(bridge);
    return this.result;
  }

  setResultMap(bridge) {
    this.setInitialResultMap();
    for (let i = 0; i < this.#selected.getLength(); i += 1) {
      const selectedElement = this.#selected.getElement(i);
      const bridgeElement = bridge.getBridge(i);
      this.setResultElement(selectedElement, bridgeElement, i);
    }
  }

  setResultElement(selectedElement, bridgeElement, i) {
    if (selectedElement === bridgeElement) {
      if (selectedElement === INPUT_MESSAGE.UP) this.result[0][i] = true;
      else if (selectedElement === INPUT_MESSAGE.DOWN) this.result[1][i] = true;
    } else if (selectedElement !== bridgeElement) {
      if (selectedElement === INPUT_MESSAGE.UP) this.result[0][i] = false;
      else if (selectedElement === INPUT_MESSAGE.DOWN)
        this.result[1][i] = false;
    }
  }

  getLevelCnt() {
    return this.#selected.getLength();
  }

  getTryCnt() {
    return this.#tryCnt.get();
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
}

module.exports = BridgeGame;
