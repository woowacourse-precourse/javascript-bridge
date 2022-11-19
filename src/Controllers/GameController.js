const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');

class GameController {
  constructor() {
    this.outputView = OutputView;
    this.inputView = InputView;
    this.size = 0;
  }

  startGame() {
    this.outputView.printStart();
    this.selectBridgeSize();
  }

  selectBridgeSize() {
    this.inputView.readBridgeSize((userInput) => {
      const size = this.inputView.getBridegeSize(userInput);
      console.log('size is ', size);
      this.nextStep();
    });
  }

  nextStep() {
    console.log(123);
    Console.close();
  }
}

module.exports = GameController;
