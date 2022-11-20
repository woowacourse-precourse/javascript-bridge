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

    const self = this.play.bind(this);
    InputView.readBridgeSize(self, (bridgeLength) => {
      this.#game.start(bridgeLength);
      this.move();
    });
  }
  move() {
    const self = this.move.bind(this);
    InputView.readMoving(self, (command) => {
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
    const self = this.retry.bind(this);
    InputView.readGameCommand(self, (command) => {
      if (command === "R") {
        return this.restart();
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
