const { Console } = require("@woowacourse/mission-utils");
const { BridgeSize, MoveInput } = require("./utils");
const generater = require("./BridgeRandomNumberGenerator").generate;
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const Player = require("./Player");

const ASK_BRIDGE_LENGTH = "다리의 길이를 입력해주세요.\n";
const ASK_WHERE_WANT_TO_GO = "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n";

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(ASK_BRIDGE_LENGTH, (sizeInput) => {
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
    Console.readLine(ASK_WHERE_WANT_TO_GO, (wantGo) => {
      new MoveInput(wantGo);
      const isCorrect = new BridgeGame(this.canWalkBridge, wantGo).move();
      Player.updateState(wantGo, isCorrect);

      OutputView.printMap();
      if (Player.gameSuccess) OutputView.printResult();
      else isCorrect ? this.readMoving() : this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
