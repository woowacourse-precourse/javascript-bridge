/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, BRIDGE } = require("./Constants/Constants");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeSizeCheck = require("./Check/BridgeSizeCheck");
const MoveCheck = require("./Check/MoveCheck");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const RetryQuitCheck = require("./Check/RetryQuitCheck");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  readBridgeSize() {
    const gameRec = { moveNum: 0, attemptNum: 1, bridgeAnswer: [] };
    MissionUtils.Console.readLine(MESSAGES.ENTER_SIZE, inputLen => {
      this.checkBridgeSizeInput(inputLen, gameRec);
    });
  },

  checkBridgeSizeInput(inputLen, gameRec) {
    try {
      (() => new BridgeSizeCheck(Number(inputLen)))();
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readBridgeSize();
      return;
    }
    this.setBridgeInfo(inputLen, gameRec);
  },

  setBridgeInfo(inputLen, gameRec) {
    gameRec.bridgeAnswer = BridgeMaker.makeBridge(inputLen, BridgeRandomNumberGenerator.generate);
    gameRec.bridgeOutput = { firstBridge: BRIDGE.LEFT_BRACKET, secondBridge: BRIDGE.LEFT_BRACKET };
    this.readMoving(gameRec); // moveNum, attemptNum, bridgeAnswer, bridgeOutput
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(gameRec) {
    MissionUtils.Console.readLine(MESSAGES.ENTER_MOVING, inputUOrD => {
      this.checkMovingInput(inputUOrD, gameRec); // gameRec: moveNum, attemptNum, bridgeAnswer, bridgeOutput, inputUOrD, correctOrNot
    });
  },

  checkMovingInput(inputUOrD, gameRec) {
    try {
      (() => new MoveCheck(inputUOrD))(); // check valid input
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readMoving(gameRec);
      return;
    }
    this.setMovingInfo(inputUOrD, gameRec);
  },

  setMovingInfo(inputUOrD, gameRec) {
    gameRec.inputUOrD = inputUOrD;
    const bridgeGame = new BridgeGame();
    bridgeGame.move(gameRec); // moveNum, attemptNum, bridgeAnswer, bridgeOutput, inputUOrD
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameRec) {
    MissionUtils.Console.readLine(MESSAGES.ENTER_RETRYQUIT, inputROrQ => {
      this.checkGameCommandInput(inputROrQ, gameRec);
    });
  },

  checkGameCommandInput(inputROrQ, gameRec) {
    try {
      (() => new RetryQuitCheck(inputROrQ))(); // check valid input
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readGameCommand(gameRec);
      return;
    }
    this.decideNextPrompt(inputROrQ, gameRec);
  },

  decideNextPrompt(inputROrQ, gameRec) {
    if (inputROrQ === "R") {
      const bridgeGame = new BridgeGame();
      bridgeGame.retry(gameRec);
    } 
    if (inputROrQ === "Q") {
      OutputView.printResult(gameRec);
    }
  },
};

module.exports = InputView;
