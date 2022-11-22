const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const message = require("./constants/message.js");
const term = require("./constants/term.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const BridgeMaker = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame.js");
const OutputView = require("./OutputView");
class App {
  #userNumber;
  play() {
    MissionUtils.Console.print(message.START_MESSAGE);
    this.bridgeGame = new BridgeGame();
    this.playGame();
  }

  playGame() {
    try {
      this.tryCount = 1;
      this.readyGame();
      this.startGame();
    } catch (e) {
      MissionUtils.Console.print(e);
      MissionUtils.Console.close();
    }
  }

  readyGame() {
    this.userNumber = this.inputNumber(); //다리 길이
    this.bridge = this.bridges(this.userNumber); //UD 배열 만들기
    this.inputArr = []; //input UD배열
  }

  startGame() {
    this.inputChar = this.InputUpDown();
    this.updownProcess();
    this.createBridge();
    this.compareInput();
    if (this.downBridge.length === this.bridge.length) {
      this.endGame(this.upBridge, this.downBridge, term.SUCCESS);
      return;
    }
    this.startGame();
  }

  compareInput() {
    if (
      this.inputArr[this.inputArr.length - 1] !==
      this.bridge[this.inputArr.length - 1]
    ) {
      this.retryProcess();
    }
  }

  createBridge() {
    const { upBridge, downBridge } = this.bridgeGame.move(
      this.inputArr,
      this.bridge
    );
    this.upBridge = upBridge;
    this.downBridge = downBridge;
    OutputView.printMap(this.upBridge, this.downBridge);
  }

  retryProcess() {
    InputView.readGameCommand();
    const { isRQ, charRQ } = this.bridgeGame.retry(InputView.command);
    if (!isRQ) {
      throw new Error(message.NOT_RETRY_QUIT_CHAR_MESSAGE);
    }
    if (charRQ === term.RETRY) {
      this.init();
      this.startGame();
      return;
    }
    if (charRQ === term.QUIT) {
      this.endGame(this.upBridge, this.downBridge, term.FAIL);
      return;
    }
  }

  updownProcess() {
    const { isUpDown, charUpDown } = this.bridgeGame.characterUpDownCheck(
      this.inputChar
    );
    if (!isUpDown) {
      throw new Error(message.NOT_UP_DOWN_CHAR_MESSAGE); //UD 아닌 값 입력
    }
    this.inputArr.push(charUpDown);
  }

  endGame(upBridge, downBridge, result) {
    OutputView.printResult(upBridge, downBridge, result, this.tryCount);
    MissionUtils.Console.close();
  }

  init() {
    this.inputArr = []; //input UD배열
    this.tryCount += 1;
  }

  inputNumber() {
    try {
      InputView.readBridgeSize();
    } catch (e) {
      MissionUtils.Console.print(e);
    }
    return InputView.bridgeCount;
  }

  bridges(number) {
    const randomNumber = BridgeRandomNumberGenerator.generate;
    const bridge = BridgeMaker.makeBridge(number, randomNumber);
    return bridge;
  }

  InputUpDown() {
    try {
      InputView.readMoving();
    } catch (e) {
      MissionUtils.Console.print(e);
    }
    return InputView.inputChar;
  }
}
module.exports = App;
