const { Console } = require("@woowacourse/mission-utils");
const { GAME_START_MESSAGE } = require("./constants");
const InputView  = require("./InputView");

class App {

  play() {
    Console.print(GAME_START_MESSAGE);  
    InputView.readBridgeSize(); //첫 입력 시작
  }
}

const app = new App();
app.play();

module.exports = App;
