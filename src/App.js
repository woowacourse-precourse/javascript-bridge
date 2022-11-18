const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE } = require("./Constant");
const outputView = require("./OutputView");


class App {
  play() {
    outputView.printStart();
  }

}

const app = new App();
app.play();

module.exports = App;
