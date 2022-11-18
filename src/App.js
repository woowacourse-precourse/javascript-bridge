const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, ERROR_MESSAGE } = require("./Constant");
const outputView = require("./OutputView");
const inputView = require("./InputView");


class App {
  play() {
    outputView.printStart();
    inputView.readBridgeSize((size) => {
      if(size < 2 || size > 20) {
        throw new Error(ERROR_MESSAGE.LENGTH);
      }
    });
  }

}

const app = new App();
app.play();

module.exports = App;
