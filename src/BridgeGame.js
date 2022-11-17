const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Console = MissionUtils.Console;
// inputView, outputView 사용 불가
class BridgeGame {
  #current_bridge = 0;
  #try_count = 1;
  #game_state;
  #bridge_map = [[], []];
  #ANSWER_BRIDGE_ARRAY;

  constructor(ANSWER_BRIDGE_ARRAY) {
    this.#ANSWER_BRIDGE_ARRAY = ANSWER_BRIDGE_ARRAY;
    console.log(this.#ANSWER_BRIDGE_ARRAY, "construct");
  }

  move() {
    console.log("hi");
    this.#game_state = false;
    InputView.readMoving(this.checkBridgeNumber);
  }

  checkBridgeNumber = (COMMAND) => {
    const INDEX = this.#current_bridge;
    if (COMMAND === this.#ANSWER_BRIDGE_ARRAY[INDEX]) {
      return this.circlePush(COMMAND);
    }
    return this.crossPush(COMMAND);
  };
  changeCommandNumber(COMMAND) {
    const COMMAND_NUMBER = COMMAND === "U" ? 1 : 0;
    const REST_ARRAY_NUMBER = COMMAND_NUMBER === 1 ? 0 : 1;
    return [COMMAND_NUMBER, REST_ARRAY_NUMBER];
  }

  circlePush(COMMAND) {
    const [COMMAND_NUMBER, REST_ARRAY_NUMBER] =
      this.changeCommandNumber(COMMAND);
    this.#bridge_map[COMMAND_NUMBER].push("O");
    this.#bridge_map[REST_ARRAY_NUMBER].push(" ");
    OutputView.printMap(this.#bridge_map);
    return this.currentBridge();
  }

  crossPush(COMMAND) {
    const [COMMAND_NUMBER, REST_ARRAY_NUMBER] =
      this.changeCommandNumber(COMMAND);
    this.#bridge_map[COMMAND_NUMBER].push("X");
    this.#bridge_map[REST_ARRAY_NUMBER].push(" ");
    OutputView.printMap(this.#bridge_map);
    return this.failGame();
  }
  failGame() {
    return InputView.readGameCommand(this.stop, this.retry);
  }
  retry = () => {
    this.#bridge_map = [[], []];
    this.#current_bridge = 0;
    console.log("retry", this.#bridge_map, this.#current_bridge);
    return this.move();
  };
  stop = () => {
    OutputView.printResult(this.#bridge_map, this.#try_count, this.#game_state);
    return Console.close();
  };
}

module.exports = BridgeGame;
