const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./Validation");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #inputs;
  #gameCount;

  constructor() {
    this.#gameCount = 0;
    this.RESTART = "R";
    this.QUIT = "Q";
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  setBridge = (bridge) => {
    this.#bridge = bridge;
  };
  setInput = (newInput) => {
    this.#inputs = newInput;
  };
  setGameCount = () => {
    this.#gameCount += 1;
  };

  start = () => {
    this.setInput([]);
    this.setGameCount();
    InputView.readBridgeSize(this.getBrigeSize);
  };
  gameIsOver = () => {
    if (this.#inputs.length === this.#bridge.length) return true;
    const inputLastIndex = this.#inputs.length - 1;
    if (this.#inputs[inputLastIndex] !== this.#bridge[inputLastIndex])
      return true;
    return false;
  };
  getBrigeSize = (input) => {
    Validation.validateIsNumber(input);
    Validation.validateBridgeRange(input);
    this.setBridge(
      BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate)
    );
    InputView.readMoving(this.move);
  };
  move = (input) => {
    Validation.validateMoveInput(input);
    const newInputArr = [...this.#inputs, input];
    this.setInput(newInputArr);
    OutputView.printMap(this.#bridge, this.#inputs);
    if (this.gameIsOver()) InputView.readGameCommand(this.retry);
    else InputView.readMoving(this.move);
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry = (input) => {
    Validation.validateRestartInput(input);
    if (input === this.RESTART) this.start();
    else OutputView.printResult(this.#bridge, this.#inputs, this.#gameCount);
  };
}

module.exports = BridgeGame;
