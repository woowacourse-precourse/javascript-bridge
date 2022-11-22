const { Console } = require("@woowacourse/mission-utils");
const { BridgeSize, MoveInput, CommandInput } = require("./Validate");
const { InputConstants } = require("./constant/Constants");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const Player = require("./Player");

const InputView = {
  readBridgeSize() {
    Console.readLine(InputConstants.ASK_BRIDGE_LENGTH, (inputSize) => {
      try {
        this.createComputerBridge(inputSize);
        this.readMoving();
      } catch (error) {
        Console.print(error);
        this.readBridgeSize();
      }
    });
  },

  readMoving() {
    Console.readLine(InputConstants.ASK_WHERE_WANT_TO_GO, (move) => {
      try {
        this.comparePlayerMove(move);
      } catch (error) {
        Console.print(error);
        this.readMoving();
      }
    });
  },

  readGameCommand() {
    Console.readLine(InputConstants.ASK_RETRY_OR_QUIT, () => {
      try {
        this.selectRetryOrQuit(move);
      } catch (error) {
        Console.print(error);
        this.readGameCommand();
      }
    });
  },

  createComputerBridge(inputSize) {
    const bridgeSize = new BridgeSize(inputSize);
    const size = bridgeSize.makeStringToNumber();
    Player.sizeUpdate(size);

    const generater = BridgeRandomNumberGenerator.generate;
    this.bridgeShape = BridgeMaker.makeBridge(size, generater);
  },

  comparePlayerMove(move) {
    new MoveInput(move);
    const correct = new BridgeGame().move(this.bridgeShape, move);
    Player.stateUpdate(move, correct);

    OutputView.printMap();
    if (Player.gameSuccess) {
      OutputView.printResult();
    } else {
      correct ? this.readMoving() : this.readGameCommand();
    }
  },

  selectRetryOrQuit(command) {
    new CommandInput(command);

    new BridgeGame().retry(command)
      ? (Player.reset(), this.readMoving(this.bridgeShape))
      : OutputView.printResult();
  },
};

module.exports = InputView;
