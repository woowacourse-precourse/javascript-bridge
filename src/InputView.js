const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");

const InputView = {
  MOVE_UP: "U",
  MOVE_DOWN: "D",
  RETRY_COMMAND: "R",
  QUIT_COMMAND: "Q",

  gameContinue: 0,
  bridge: [],
  tryCount: 1,

  readBridgeSize() {
    MissionUtils.Console.readLine(
      "다리 건너기 게임을 시작합니다.다리의 길이를 입력해주세요.",
      (answer) => {
        this.bridgeSizeExceptionCatch(answer);
        this.bridge = BridgeMaker.makeBridge(
          answer,
          BridgeRandomNumberGenerator.generate
        );
        this.readMoving(0);
      }
    );
  },

  bridgeSizeExceptionCatch(answer) {
    try {
      this.bridgeSizeException(answer);
    } catch (e) {
      MissionUtils.Console.print(e);
      this.readBridgeSize();
    }
  },

  bridgeSizeException(answer) {
    if (isNaN(answer)) throw "[ERROR] 문자를 입력하실 수 없습니다.";
    if (answer < 3 || answer > 20)
      throw "[ERROR] 3이상 20이하의 수만 입력할 수 있습니다.";
  },

  readMoving(turnNumber) {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (answer) => {
        this.movingExceptionCatch(answer, turnNumber);
        const brgGame = new BridgeGame();
        this.gameContinue = brgGame.move(turnNumber, this.bridge, answer);
        this.isGameContinueQuestion(turnNumber, answer);
      }
    );
  },

  isGameContinueQuestion(turnNumber, answer) {
    if (this.gameContinue > 0) this.successContinueGame(turnNumber, answer);
    if (this.gameContinue < 0) this.inputWrongAnswer(turnNumber, answer);
    if (this.gameContinue == 0) this.gameOver(turnNumber, answer);
  },

  successContinueGame(turnNumber, answer) {
    let moveAndBool = answer + "T";
    OutputView.makeBridgeMap(turnNumber, this.bridge, moveAndBool);
    this.readMoving(turnNumber + 1);
  },

  inputWrongAnswer(turnNumber, answer) {
    let moveAndBool = answer + "F";
    OutputView.makeBridgeMap(turnNumber, this.bridge, moveAndBool);
    this.readGameCommand(turnNumber, answer);
  },

  gameOver(turnNumber, answer) {
    let moveAndBool = answer + "T";
    OutputView.printResult(turnNumber, moveAndBool, this.tryCount);
    MissionUtils.Console.close();
  },

  movingExceptionCatch(answer, turnNumber) {
    try {
      this.movingException(answer);
    } catch (e) {
      MissionUtils.Console.print(e);
      this.readMoving(turnNumber);
    }
  },

  movingException(answer) {
    if (answer != this.MOVE_UP && answer != this.MOVE_DOWN)
      throw "[ERROR] U 혹은 D만 입력할 수 있습니다.";
  },

  readGameCommand() {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (answer) => {
        this.retryExceptionCatch(answer, turnNumber, inputMoveUpDown);
        const brgGame = new BridgeGame();
        let isRetry = brgGame.retry(answer);
        this.isRetryGame(isRetry, turnNumber, inputMoveUpDown);
        if (isRetry == 0) MissionUtils.Console.close();
      }
    );
  },
  isRetryGame(isRetry, turnNumber, inputMoveUpDown) {
    let moveAndBool = inputMoveUpDown + "F";
    if (isRetry == 1) {
      this.tryCount++;
      this.readMoving(0);
    }
    if (isRetry == 0)
      OutputView.printResult(turnNumber, moveAndBool, this.tryCount);
  },

  retryExceptionCatch(answer, turnNumber, inputMoveUpDown) {
    try {
      this.retryExceptionProcess(answer);
    } catch (e) {
      MissionUtils.Console.print(e);
      if (e) this.readGameCommand(turnNumber, inputMoveUpDown);
    }
  },

  retryExceptionProcess(answer) {
    if (answer != this.RETRY_COMMAND && answer != this.QUIT_COMMAND)
      throw "[ERROR] R 혹은 Q만 입력할 수 있습니다.";
  },
};

module.exports = InputView;
