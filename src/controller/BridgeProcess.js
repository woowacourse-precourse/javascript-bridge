const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { Console } = require('@woowacourse/mission-utils');
const { PRINTBRIDGESIZE, PRINTMOVEMENT, PRINTGAMECOMMAND } = require('../view/Message');
const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../model/BridgeRandomNumberGenerator');
const MovementVadlidation = require('../model/MovementValidaion');

// 명심하기! controller는 데이터를 받거나 사용자에게 동작을 받으면 model 또는 view를 변경

class BridgeProcess {
  #outputView = OutputView;
  #inputView = InputView;

  start() {
    Console.print(this.#outputView.printStart());
    this.#inputGameCommand();
  }

  #inputBridgeSize() {
    Console.readLine(PRINTBRIDGESIZE, (bridgeSize) => {
      const bridgeSizeNumber = this.#inputView.readBridgeSize(bridgeSize);
      const match = BridgeMaker.makeBridge(bridgeSizeNumber, generate);
      bridgeSizeNumber ? this.#inputMovement() : this.#inputBridgeSize();
    });
  }

  #inputMovement() {
    Console.readLine(PRINTMOVEMENT, (movement) => {
      const isMovement = this.#inputView.readMoving(movement);
      isMovement ? '맞아' : this.#inputMovement();
    });
  }

  #inputGameCommand() {
    Console.readLine(PRINTGAMECOMMAND, (command) => {
      const isCommand = this.#inputView.readGameCommand(command);
      isCommand ? '맞아' : this.#inputGameCommand();
    });
  }
}

module.exports = BridgeProcess;
