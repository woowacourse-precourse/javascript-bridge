const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const {generate} = require("./BridgeRandomNumberGenerator");
const {makeBridge} = require("./BridgeMaker");
const Console = MissionUtils.Console;


class App {

  #bridgeSize;
  #bridge;
  #move;
  #gameCount;

  constructor(){
    this.#bridgeSize = 0;
    this.#bridge = [];
    this.#move = "";
    this.gameCount = 1;
  }
  
  async play() {
    InputView.gameStart();
    this.#bridgeSize = await InputView.readBridgeSize();
    this.#bridge = makeBridge(this.#bridgeSize, generate);
    Console.print(this.#bridge);
    const bridgeGame = new BridgeGame();
    await this.startGame(bridgeGame);
  }

  async startGame(bridgeGame){
    await this.moveBridge(bridgeGame);
    const isSuccess = bridgeGame.getSuccess();
    isSuccess? OutputView.printResult(this.#gameCount, isSuccess) : await this.restartGame();
  }

  async moveBridge(bridgeGame){
    while((bridgeGame.getIdx()<this.#bridgeSize) && (bridgeGame.getSuccess())){
      this.#move = await InputView.readMoving();
      bridgeGame.move(this.#move, this.#bridge);
      OutputView.pushResult(this.#bridge, bridgeGame.getIdx(), bridgeGame.getSuccess());
      OutputView.printMap();
    }
  }

  async restartGame(bridgeGame){
   const restart = await InputView.readGameCommand();
   if(restart === "Q") OutputView.printResult(this.#gameCount, bridgeGame.getSuccess());
   if(restart === "R"){
    this.#gameCount += 1;
    bridgeGame.retry();
    this.startGame(bridgeGame);
   }
  }


}

const app = new App();
app.play();

module.exports = App;
