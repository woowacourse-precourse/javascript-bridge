const BridgeMaker = require("./BridgeMaker");
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
    this.#inputs = [];
    this.RESTART = "R";
    this.QUIT = "Q";
  }
  setBridge = (bridge) => {
    this.#bridge = bridge;
  };
  setInput = (newInputs) => {
    this.#inputs = [...newInputs];
  };
  setGameCount = () => {
    this.#gameCount += 1;
  };
  getState() {
    return {
      bridge: this.#bridge,
      inputs: this.#inputs,
      gameCount: this.#gameCount,
    };
  }
  gameIsOver = () => {
    if (this.#inputs.length !== this.#bridge.length) return false;
    const inputLastIndex = this.#inputs.length - 1;
    return this.#inputs[inputLastIndex] === this.#bridge[inputLastIndex];
  };

  chooseFalseBridge = () => {
    const inputLastIndex = this.#inputs.length - 1;
    return this.#inputs[inputLastIndex] !== this.#bridge[inputLastIndex];
  };
  bridge = (input) => {
    Validation.validateIsNumber(input);
    Validation.validateBridgeRange(input);
    this.setBridge(
      BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate)
    );
  };
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move = (input) => {
    Validation.validateMoveInput(input);
    this.setInput([...this.#inputs, input]);
    if (this.gameIsOver()) return "GAME_OVER";
    if (this.chooseFalseBridge()) return "FALL_OFF";
    return "KEEP_MOVE";
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry = (input) => {
    Validation.validateRestartInput(input);
    this.setInput([]);
    return input;
  };
}

module.exports = BridgeGame;
