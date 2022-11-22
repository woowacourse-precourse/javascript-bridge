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
        this.startReadBridge(bridgeSize);
      } catch (e) {
        Console.print(e);
        this.readBridgeSize();
      }
    });
  },

  startReadBridge(bridgeSize) {
    let numberBridgeSize = Number(bridgeSize) ?? NaN;
    Validate.validateBridgeSize(numberBridgeSize);
    this.bridge = BridgeMaker.makeBridge(numberBridgeSize, randomNumberGenerator.generate);
    InputView.readMoving();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(Constant.INPUT.NEXT_STEP, (inputUpOrDown) => {
      try {
        this.startMoving(inputUpOrDown);
      } catch (e) {
        Console.print(e);
        this.readMoving();
      }
    });
  },

  startMoving(inputUpOrDown) {
    Validate.validateUserInputMove(inputUpOrDown);
    this.bridgeGame = new BridgeGame();
    let result = this.bridgeGame.move(inputUpOrDown, this.bridge);
    //맞췄을 때
    if (result && BridgeGame._userInputCount !== this.bridge.length) {
      this.correctMove(result, inputUpOrDown);
    }
    //틀렸을 때
    else if (!result && BridgeGame._userInputCount !== this.bridge.length) {
      this.failMove(result, inputUpOrDown);
    } else {
      //게임 끝났을 때
      this.gameFinish(result, inputUpOrDown);
    }
  },

  gameFinish(result, inputUpOrDown) {
    if (!result) {
      OutputView.printMap(result, inputUpOrDown, this.bridge.length);
      this.readGameCommand();
      return;
    }
    OutputView.printMap(result, inputUpOrDown, this.bridge.length);
    OutputView.printResult(result, BridgeGame._gameCount);
    Console.close();
  },

  correctMove(result, upOrDown) {
    OutputView.printMap(result, upOrDown, this.bridge.length);
    this.readMoving();
  },

  failMove(result, upOrDown) {
    OutputView.printMap(result, upOrDown, this.bridge.length);
    this.readGameCommand();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(Constant.INPUT.GAME_RETRY, (userInputRetry) => {
      try {
        this.reStartGameCommand(userInputRetry);
      } catch (e) {
        Console.print(e);
        this.readGameCommand();
      }
    });
  },

  reStartGameCommand(userInputRetry) {
    Validate.validateUserInputRetry(userInputRetry);
    //다시 시작
    if (userInputRetry === Constant.RETRY) {
      this.bridgeGame.retry();
      InputView.readMoving();
    } else {
      //그만두기
      OutputView.printResult("", BridgeGame._gameCount);
      Console.close();
    }
  },
};

module.exports = InputView;
