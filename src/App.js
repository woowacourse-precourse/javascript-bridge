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

  constructor(){
    this.#bridgeSize = 0;
    this.#bridge = [];
  }
  
  async play() {
    await this.readInput();
    const bridgeGame = new BridgeGame();
    await this.startGame(bridgeGame);
  }

  async readInput(){
    InputView.gameStart();
    this.#bridgeSize = await InputView.readBridgeSize();
    this.#bridge = makeBridge(this.#bridgeSize, generate);
    Console.print(this.#bridge);
  }

  async startGame(bridgeGame){
    await this.moveBridge(bridgeGame);
    const [isSuccess, gameCount] = [bridgeGame.getSuccess(), bridgeGame.getCount()];
    isSuccess? OutputView.printResult(gameCount,isSuccess) : await this.restartGame(bridgeGame);
  }

  async moveBridge(bridgeGame){
    while((bridgeGame.getIdx()<this.#bridgeSize) && (bridgeGame.getSuccess())){
      const dir = await InputView.readMoving();
      bridgeGame.move(dir, this.#bridge);
      OutputView.pushResult(dir,bridgeGame.getSuccess());
      OutputView.printMap();
    }
  }

  async restartGame(bridgeGame){
   const restart = await InputView.readGameCommand();
   if(restart === "Q") {
    const [isSuccess, gameCount] = [bridgeGame.getSuccess(), bridgeGame.getCount()];
    OutputView.printResult(gameCount,isSuccess);
   }
   else if(restart === "R"){
    this.initGame(bridgeGame);
    this.startGame(bridgeGame);
   }
  }

  initGame(bridgeGame){
    bridgeGame.retry();
    OutputView.upper.length = 0;
    OutputView.downer.length = 0;
  }

}

const app = new App();
app.play();

module.exports = App;
