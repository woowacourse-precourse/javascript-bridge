const MissionUtils = require("@woowacourse/mission-utils");
const CallView = require("./CallView");
const Console = MissionUtils.Console;

class BridgeGame {
  #current_bridge = 0;
  #try_count = 1;
  #game_state;
  #bridge_map = [[], []];
  #ANSWER_BRIDGE_ARRAY;

  constructor(ANSWER_BRIDGE_ARRAY) {
    this.CallView = new CallView();
    this.#ANSWER_BRIDGE_ARRAY = ANSWER_BRIDGE_ARRAY;
  }

  move() {
    this.#game_state = false;
    this.CallView.readMove(this.commandValidate);
  }

  commandValidate = (command) => {
    const COMMAND = command;
    return this.checkBridgeNumber(COMMAND);
  };
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
    this.CallView.currentMap(this.#bridge_map);
    return this.currentBridge();
  }

  currentBridge() {
    if (this.#current_bridge === this.#ANSWER_BRIDGE_ARRAY.length - 1) {
      return this.complateGame();
    }
    this.#current_bridge += 1;
    return this.move();
  }

  crossPush(COMMAND) {
    const [COMMAND_NUMBER, REST_ARRAY_NUMBER] =
      this.changeCommandNumber(COMMAND);
    this.#bridge_map[COMMAND_NUMBER].push("X");
    this.#bridge_map[REST_ARRAY_NUMBER].push(" ");
    this.CallView.currentMap(this.#bridge_map);
    return this.failGame();
  }
  complateGame() {
    this.#game_state = true;
    this.CallView.resultPrint(
      this.#bridge_map,
      this.#try_count,
      this.#game_state
    );
    return Console.close();
  }
  failGame() {
    return this.CallView.readCommand(this.stop, this.retry);
  }
  retry = () => {
    this.#bridge_map = [[], []];
    this.#current_bridge = 0;
    this.#try_count += 1;
    return this.move();
  };
  stop = () => {
    this.CallView.resultPrint(
      this.#bridge_map,
      this.#try_count,
      this.#game_state
    );
    return Console.close();
  };
}

module.exports = BridgeGame;
