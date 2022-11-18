const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const {generate} = require("./BridgeRandomNumberGenerator");
const {makeBridge} = require("./BridgeMaker");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];


class App {

  #bridgeSize;
  #bridge;

  constructor(){
    this.#bridgeSize = 0;
    this.#bridge = [];
  }
  
  async play() {
    InputView.gameStart();
    this.#bridgeSize = await InputView.readBridgeSize();

  }

}

const app = new App();
app.play();

module.exports = App;
