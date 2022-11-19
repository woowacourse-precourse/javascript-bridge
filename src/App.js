const MissionUtils = require("@woowacourse/mission-utils");
const Controller = require("./Controller");
class App {
  constructor() {
    this.controller = new Controller();
  }
  play() {
    this.controller.setting();
    this.controller.play();
  }
}

module.exports = App;
