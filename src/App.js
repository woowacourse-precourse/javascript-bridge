const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

const { Console } = MissionUtils;

class App {
  #game;
  constructor() {
    this.#game = new BridgeGame();
  }
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.play.bind(this), (bridgeLength) => {
      this.#game.start(bridgeLength);
      this.move();
    });
  }
  move() {
    InputView.readMoving(this.move.bind(this), (command) => {
      const { bridge, inputs } = this.#game.move(command);
      OutputView.printMap(bridge, inputs);
      this.moveAfter(command);
    });
  }
  #doWhenWrongAnswer() {
    this.retry();
  }
  #doWhenRightAnswer() {
    if (this.#game.isAnswer()) {
      return this.end();
    }
    this.move();
  }
  moveAfter(command) {
    const validatedAnswer = this.#game.moveAfter(command);
    if (validatedAnswer === false) {
      return this.#doWhenWrongAnswer();
    }
    this.#doWhenRightAnswer();
  }
  retry() {
    InputView.readGameCommand(this.retry.bind(this), (command) => {
      if (command === "R") {
        this.restart();
        return;
      }
      this.end();
    });
  }
  restart() {
    this.#game.retry();
    this.move();
  }
  end() {
    const { bridge, inputs, trial } = this.#game.end();
    OutputView.printResult(bridge, inputs, trial);
    Console.close();
  }
}

module.exports = App;

const app = new App();
app.play();
