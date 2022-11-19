const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { Console } = require('@woowacourse/mission-utils');
const { PRINTBRIDGESIZE, PRINTMOVEMENT, PRINTGAMECOMMAND } = require('../constant/Message');
const BridgeGame = require('./BridgeGame');

// 명심하기! controller는 데이터를 받거나 사용자에게 동작을 받으면 model 또는 view를 변경

class BridgeProcess {
  #outputView = OutputView;
  #inputView = InputView;
  #gameReport;

  start() {
    Console.print(this.#outputView.printStart());
    this.#process();
  }

  #process() {
    this.#gameReport = new BridgeGame();
    this.#inputBridgeSize();
  }

  #inputBridgeSize() {
    Console.readLine(PRINTBRIDGESIZE, (bridgeSize) => {
      const isBridgeSize = this.#inputView.readBridgeSize(bridgeSize);
      this.#gameReport.makeBridgeInfo(bridgeSize);
      isBridgeSize ? this.#inputMovement() : this.#inputBridgeSize();
    });
  }

  #inputMovement() {
    Console.readLine(PRINTMOVEMENT, (movement) => {
      const isMovement = this.#inputView.readMoving(movement);
      isMovement ? this.#printMovement(isMovement) : this.#inputMovement();
    });
  }

  #printMovement(movement) {
    const [match, { sucess, process }] = this.#gameReport.move(movement);
    this.#outputView.printMap(match);
    sucess || !process ? this.#printFinalResult(sucess) : this.#inputMovement();
  }

  #inputGameCommand() {
    Console.readLine(PRINTGAMECOMMAND, (command) => {
      const isCommand = this.#inputView.readGameCommand(command);
      isCommand ? '맞아' : this.#inputGameCommand();
    });
  }

  #printFinalResult(sucess) {
    console.log(sucess);
  }
}

module.exports = BridgeProcess;
