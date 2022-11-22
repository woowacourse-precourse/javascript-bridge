const MissionUtils = require("@woowacourse/mission-utils");
const BridgeErrorCheck = require("./BridgeError");
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
    this.errorCheck = new BridgeErrorCheck();
    this.#ANSWER_BRIDGE_ARRAY = ANSWER_BRIDGE_ARRAY;
  }

  move() {
    this.#game_state = false;
    return this.CallView.readMove(this.checkCommand);
  }

  checkCommand = (command) => {
    try {
      this.errorCheck.validateCommand(command);
      return this.checkBridgeNumber(command);
    } catch (error) {
      this.CallView.justPrint(error);
      return this.move();
    }
  };

  checkBridgeNumber = (command) => {
    const INDEX = this.#current_bridge;
    if (command === this.#ANSWER_BRIDGE_ARRAY[INDEX]) {
      return this.circlePushAndPrint(command);
    }
    return this.crossPushAndPrint(command);
  };

  changeCommandNumber(COMMAND) {
    const COMMAND_NUMBER = COMMAND === "U" ? 1 : 0;
    const REST_ARRAY_NUMBER = COMMAND_NUMBER === 1 ? 0 : 1;
    return [COMMAND_NUMBER, REST_ARRAY_NUMBER];
  }

  circlePushAndPrint(COMMAND) {
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

  crossPushAndPrint(COMMAND) {
    const [COMMAND_NUMBER, REST_ARRAY_NUMBER] =
      this.changeCommandNumber(COMMAND);
    this.#bridge_map[COMMAND_NUMBER].push("X");
    this.#bridge_map[REST_ARRAY_NUMBER].push(" ");
    this.CallView.currentMap(this.#bridge_map);
    return this.validateMenuCommand();
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

  failGame = (command) => {
    try {
      this.errorCheck.validateMenuCommand(command);
      return command === "R" ? this.retry() : this.stop();
    } catch (error) {
      this.CallView.justPrint(error);
      return this.CallView.readCommand(this.failGame);
    }
  };

  validateMenuCommand = () => {
    return this.CallView.readCommand(this.failGame);
  };

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
