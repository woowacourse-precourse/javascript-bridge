const { Console } = require("@woowacourse/mission-utils");
const {
  BRIDGE_UP,
  BRIDGE_DOWN,
  MARKING_EMPTY,
  MESSAGE_GAME_START,
  MESSAGE_GAME_END,
  MESSAGE_PLAY_COUNT,
  MESSAGE_FINAL_RESULT,
} = require("./Utils");

const OutputView = {
  currentMap: {
    U: "",
    D: "",
  },

  markMap(moving, marking) {
    if (this.currentMap[moving] === "") this.currentMap[moving] = `[ ${marking} ]`;
    else {
      const closer = this.currentMap[moving].slice(-2);
      this.currentMap[moving] =
        this.currentMap[moving].slice(0, -2) + ` | ${marking}` + closer;
    }
  },

  setCurrentMap(moving, marking) {
    this.markMap(moving, marking);
    switch (moving) {
      case BRIDGE_UP:
        this.markMap(BRIDGE_DOWN, MARKING_EMPTY);
        break;
      case BRIDGE_DOWN:
        this.markMap(BRIDGE_UP, MARKING_EMPTY);
        break;
    }
  },

  printMap(moving, marking) {
    this.setCurrentMap(moving, marking);
    Console.print(this.currentMap[BRIDGE_UP]);
    Console.print(this.currentMap[BRIDGE_DOWN]);
    Console.print("");
  },

  printResult(gameResult, playCount) {
    Console.print(MESSAGE_FINAL_RESULT);
    Console.print(this.currentMap[BRIDGE_UP]);
    Console.print(this.currentMap[BRIDGE_DOWN]);
    Console.print("");
    Console.print(`${MESSAGE_GAME_END}: ${gameResult}`);
    Console.print(`${MESSAGE_PLAY_COUNT}: ${playCount}`);
  },

  printStart() {
    Console.print(MESSAGE_GAME_START);
  },

  print(message) {
    Console.print(message);
  },

  retry() {
    this.currentMap[BRIDGE_UP] = "";
    this.currentMap[BRIDGE_DOWN] = "";
  },
};

module.exports = OutputView;
