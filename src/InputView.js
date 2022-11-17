const { Console } = require("@woowacourse/mission-utils");
const { BridgeSize, MoveInput, CommandInput } = require("./utils");
const generater = require("./BridgeRandomNumberGenerator").generate;
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const Player = require("./Player");
const { InputConstants } = require("./constant/Constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(InputConstants.ASK_BRIDGE_LENGTH, (sizeInput) => {
      const bridgeSize = new BridgeSize(sizeInput);
      const size = bridgeSize.makeStringToNumber();
      Player.updateSize(size);

      this.canWalkBridge = BridgeMaker.makeBridge(size, generater);

      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(InputConstants.ASK_WHERE_WANT_TO_GO, (wantGo) => {
      new MoveInput(wantGo);
      const isCorrect = new BridgeGame().move(this.canWalkBridge, wantGo);
      Player.updateState(wantGo, isCorrect);

      OutputView.printMap();
      if (Player.gameSuccess) OutputView.printResult();
      else isCorrect ? this.readMoving() : this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(InputConstants.ASK_RETRY_OR_QUIT, (command) => {
      new CommandInput(command);

      new BridgeGame().retry(command)
        ? (Player.reset(), this.readMoving(this.canWalkBridge))
        : OutputView.printResult();
    });
  },
};

module.exports = InputView;
