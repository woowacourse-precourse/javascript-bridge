const { Console } = require("@woowacourse/mission-utils");
const GameStatus = require("./GameStatus.js");
const OutputView = require("./OutputView.js");

const GameUtils = {
  init(retry) {
    GameStatus.step = 0;
    GameStatus.stage += 1;
    GameStatus.success = true;
    if(retry === 'Q') {
      Console.close();
      OutputView.printResult();
    }
  },

}

module.exports = GameUtils