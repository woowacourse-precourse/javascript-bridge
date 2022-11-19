const MissionUtils = require("@woowacourse/mission-utils");
const Controller = require("./Controller");
class App {
  play() {
    const controller = new Controller();
    controller.setting();
    controller.start();
  }
}

module.exports = App;
