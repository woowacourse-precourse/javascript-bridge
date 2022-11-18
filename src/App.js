const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
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
    this.#move = "";
  }
  
  async play() {
    InputView.gameStart();
    this.#bridgeSize = await InputView.readBridgeSize();
    this.#bridge = makeBridge(this.#bridgeSize, generate);
    Console.print(this.#bridge);
    await this.moveBridge();
  }

  async moveBridge(){
    const bridgeGame = new BridgeGame();
    while((bridgeGame.getIdx()<this.#bridgeSize) && (bridgeGame.getFlag())){
      this.#move = await InputView.readMoving();
      bridgeGame.move(this.#move, this.#bridge);
      



    }
  }
}

const app = new App();
app.play();

module.exports = App;
