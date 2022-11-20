const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("./constants/message");

class App {
  play() {
    Console.print(OUTPUT_MESSAGE.START);
  }
}

module.exports = App;
