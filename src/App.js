const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const {generate} = require("./BridgeRandomNumberGenerator");
const {makeBridge} = require("./BridgeMaker");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];


class App {

  #bridgeSize;
  #bridge;
  #move;

  constructor(){
    this.#bridgeSize = 0;
    this.#bridge = [];
    this.#move = "s";
  }
  
  async play() {

    InputView.gameStart();
    this.#bridgeSize = await InputView.readBridgeSize();
    this.#bridge = makeBridge(this.#bridgeSize, generate);
    Console.print(this.#bridge);
    this.#move = await InputView.readMoving();

  }

}

const app = new App();
app.play();

module.exports = App;
