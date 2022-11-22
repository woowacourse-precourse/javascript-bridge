const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const BridgeMaker = require("../BridgeMaker");
const { generate } = require("../util/BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");
const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("../util/Validator");

class Controller {
  #answerBirdgeList;
  constructor() {
    this.#answerBirdgeList;
    this.bridgeGame = new BridgeGame();
    this.showResult;
    this.SUCCESS = "성공";
    this.FAILURE = "실패";
  }
  start() {
    OutputView.printStart();
    this.getBridegeSize();
  }

  getBridegeSize() {
    InputView.readBridgeSize(this.getBirdgeAnswer.bind(this));
  }

  getMove() {
    InputView.readMoving(this.compare.bind(this));
  }

  getBirdgeAnswer(sizeNumber) {
    try {
      const size = sizeNumber.trim();
      Validator.isVaildBridgeSize(size);
      Validator.isVaildBridgeSizeNum(size);
      this.#answerBirdgeList = BridgeMaker.makeBridge(size, generate);
      this.getMove();
    } catch (error) {
      MissionUtils.Console.print(error);
      this.getBridegeSize();
    }
  }

  compare(moveInput) {
    try {
      const moveInputStr = moveInput.trim();
      Validator.isVaildUorD(moveInputStr);
      const compareMove = this.bridgeGame.move(
        moveInputStr,
        this.#answerBirdgeList
      );

      this.showResult = OutputView.printMap(
        this.bridgeGame.upList,
        this.bridgeGame.downList
      );
      if (compareMove === "END") this.finalResult(this.SUCCESS);
      else if (compareMove) this.getMove();
      else if (!compareMove) this.getRetryOrStop();
    } catch (error) {
      MissionUtils.Console.print(error);
      this.getMove();
    }
  }

  getRetryOrStop() {
    InputView.readGameCommand(this.judgment.bind(this));
  }

  judgment(reTryOrStop) {
    try {
      const reTryOrStopStr = reTryOrStop.trim();
      Validator.isVaildRorQ(reTryOrStopStr);
      if (reTryOrStopStr === "R") {
        this.bridgeGame.retry();
        this.getMove();
      }
      if (reTryOrStopStr === "Q") {
        this.finalResult(this.FAILURE);
        this.GameStop();
      }
    } catch (error) {
      MissionUtils.Console.print(error);
      this.getRetryOrStop();
    }
  }

  finalResult(successOrFailure) {
    OutputView.printResult(
      this.showResult,
      successOrFailure,
      this.bridgeGame.retryCount
    );
    this.GameStop();
  }
  GameStop() {
    MissionUtils.Console.close();
  }
}

module.exports = Controller;
