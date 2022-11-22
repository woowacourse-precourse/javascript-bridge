/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const Constant = require("./utils/Constant");
const Validate = require("./utils/Validate");
const BridgeMaker = require("./BridgeMaker");
const randomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(Constant.INPUT.BRIDGE_SIZE, (bridgeSize) => {
      try {
        let numberBridgeSize = Number(bridgeSize) ?? NaN;
        Validate.validateBridgeSize(numberBridgeSize);
        this.bridge = BridgeMaker.makeBridge(
          numberBridgeSize,
          randomNumberGenerator.generate
        );
        this.readMoving();
      } catch (e) {
        Console.print(e);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(Constant.INPUT.NEXT_STEP, (inputUpOrDown) => {
      try {
        Validate.validateUserInputMove(inputUpOrDown);
        this.bridgeGame = new BridgeGame();
        const bridgeLength = this.bridge.length;
        //게임 끝났을 때
        let result = this.bridgeGame.move(inputUpOrDown, this.bridge);
        if (BridgeGame._userInputCount === this.bridge.length) {
          if (!result) {
            OutputView.printMap(result, inputUpOrDown, bridgeLength);
            this.readGameCommand();
            return;
          }
          OutputView.printMap(result, inputUpOrDown, bridgeLength);
          OutputView.printResult(result, BridgeGame._gameCount);
          return;
        }
        //맞췄을 때
        if (result) {
          OutputView.printMap(result, inputUpOrDown, bridgeLength);
          this.readMoving();
          return;
        }
        //틀렸을 때
        OutputView.printMap(result, inputUpOrDown, bridgeLength);
        this.readGameCommand();
      } catch (e) {
        Console.print(e);
        this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(Constant.INPUT.GAME_RETRY, (userInputRetry) => {
      try {
        Validate.validateUserInputRetry(userInputRetry);
        //다시 시작
        if (userInputRetry === Constant.RETRY) {
          this.bridgeGame.retry();
          InputView.readMoving();
          return;
        }
        //그만두기
        if (userInputRetry === Constant.QUIT) {
          OutputView.printResult("", BridgeGame._gameCount);
          Console.close();
        }
        // OutputView.printResult("", BridgeGame._gameCount);
      } catch (e) {
        Console.print(e);
        this.readGameCommand();
      }
    });
  },
};

module.exports = InputView;
