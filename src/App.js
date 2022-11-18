const MissionUtils = require("@woowacourse/mission-utils");
const Controller = require("./Controller");
class App {
  play() {
    const constroller = new Controller();
    constroller.start();
  }
}

module.exports = App;
