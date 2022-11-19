const GameStatus = require("./GameStatus.js");

const GameUtils = {
  init() {
    GameStatus.step = 0;
    GameStatus.tried = 1;
    GameStatus.alive = true;
  },
}

module.exports = GameUtils