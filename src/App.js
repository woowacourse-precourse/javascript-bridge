const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const Console = MissionUtils.Console;


class App {

  constructor() {
  }
  
  play() {
    this.greeting();
    InputView.readBridgeSize();
  }

  greeting(){
    Console.print("다리 건너기 게임을 시작합니다.");
  }

  // async startGame(bridgeGame) {
  //   await this.moveBridge(bridgeGame);
  //   const [isSuccess, gameCount] = [bridgeGame.getSuccess(), bridgeGame.getCount()];
  //   isSuccess ? OutputView.printResult(gameCount, isSuccess) : await this.restartGame(bridgeGame);
  // }

  // async moveBridge(bridgeGame) {
  //   while ((bridgeGame.getIdx() < this.#bridgeSize) && (bridgeGame.getSuccess())) {
  //     await this.readMovingInput();
  //     bridgeGame.move(this.#move, this.#bridge);
  //     OutputView.pushResult(this.#move, bridgeGame.getSuccess());
  //     OutputView.printMap();
  //   }
  // }

  // async readMovingInput() {
  //   try {
  //     this.#move = await InputView.readMoving();
  //   } catch (err) {
  //     Console.print(err.message);
  //     await this.readMovingInput();
  //   }
  // }

  // async restartGame(bridgeGame) {
  //   await this.readCommandInput() 
  //   if (this.#restart === "Q") {
  //     const [isSuccess, gameCount] = [bridgeGame.getSuccess(), bridgeGame.getCount()];
  //     OutputView.printResult(gameCount, isSuccess);
  //   }
  //   else if (this.#restart === "R") {
  //     this.initGame(bridgeGame);
  //     this.startGame(bridgeGame);
  //   }
  // }

  // async readCommandInput() {
  //   try {
  //     this.#restart = await InputView.readGameCommand();
  //   } catch (err) {
  //     Console.print(err.message);
  //     await this.readCommandInput();
  //   }
  // }

  // initGame(bridgeGame) {
  //   bridgeGame.retry();
  //   OutputView.upper.length = 0;
  //   OutputView.downer.length = 0;
  // }

}

const app = new App();
app.play();

module.exports = App;
