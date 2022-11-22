const MissionUtils = require("@woowacourse/mission-utils");
const Generator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      try {
        const BRIDGE_GAME = new BridgeGame(this.newBridge(size));
        this.readMoving(BRIDGE_GAME);
      } catch (error) {
        this.bridgeSizeError(error);
      }
    });
  },

  /**
   * 사이즈에 맞는 다리를 생성한다.
   */
  newBridge(size) {
    return BridgeMaker.makeBridge(this.checkBridgeSize(size), Generator.generate);
  },

  /**
   * 다리 길이의 입력값이 유효한지 판단한다.
   */
  checkBridgeSize(size) {
    const size_range = [];
    for (let i = 3; i < 21; i++) {
      size_range.push(String(i));
    }
    if (!size_range.includes(size)) {
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
    }
    return parseInt(size);
  },

  /**
   * 다리 길이의 입력값이 유효하지 않을 경우 에러메시지 출력 후 다리 길이를 다시 입력받는다.
   */
  bridgeSizeError(error) {
    MissionUtils.Console.print(error);
    this.readBridgeSize();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (nextMove) => {
      try {
        const BRIDGE = bridgeGame.getBridge(); LOCATION = this.setLocation(bridgeGame, nextMove);
        this.checkLastMove(BRIDGE, LOCATION, bridgeGame);
      } catch (error) {
        this.movingError(error, bridgeGame);
      }
    });
  },

  /**
   * 현재까지 이동한 다리를 리턴한다.
   */
  setLocation(bridgeGame, move) {
    const LOCATION = bridgeGame.move(this.checkMoving(move));
    LOCATION.push(move);
    return LOCATION;
  },

  /**
   * 마지막으로 입력받은 이동할 칸이 건널 수 있는 칸인지 확인한다.
   */
  checkLastMove(bridge, location, bridgeGame) {
    if (location[location.length - 1] === bridge[location.length - 1]) {
      this.checkLocation(bridge, location, bridgeGame);
    } else if (location[location.length - 1] !== bridge[location.length - 1]) {
      OutputView.printMap(location, bridge[location.length - 1]);
      this.readGameCommand(bridge, location, bridgeGame);
    }
  },

  /**
   * 마지막으로 입력받은 이동할 칸이 전체 다리의 마지막 칸인지 확인한다.
   */
  checkLocation(bridge, location, bridgeGame) {
    if (location.length === bridge.length) { // 현재 위치가 마지막
      OutputView.printMap(location, bridge[location.length - 1]);
      this.printResult(location, bridgeGame);
    }
    if (location.length !== bridge.length) { // 현재 위치가 마지막이 아님
      OutputView.printMap(location, bridge[location.length - 1]);
      this.readMoving(bridgeGame);
    }
  },

  /**
   * 입력받은 이동할 칸이 유효한지 판단한다.
   */
  checkMoving(move) {
    if ((move === "U") || (move === "D")) {
      return move;
    }
    throw "[ERROR] 이동할 칸은 U 또는 D로 입력해 주세요.";
  },

  /**
   * 이동할 칸의 입력값이 유효하지 않을경우 에러메시지 출력 후 다리 길이를 다시 입력받는다.
   */
  movingError(error, bridgeGame) {
    MissionUtils.Console.print(error);
    this.readMoving(bridgeGame);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, location, bridgeGame) {
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (replay) => {
      try {
        this.checkIfReplay(location, bridgeGame, replay);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readGameCommand(bridge, location, bridgeGame);
      }
    });
  },

  /**
   * 게임을 재시작하거나 종료한다.
   */
  checkIfReplay(location, bridgeGame, replay) {
    if (this.checkReplay(replay) === "R") {
      bridgeGame.retry();
      this.readMoving(bridgeGame);
    }
    if (this.checkReplay(replay) === "Q") {
      this.printResult(location, bridgeGame);
    }
  },

  /**
   * 입력받은 재시작 여부가 유효한지 판단한다.
   */
  checkReplay(replay) {
    if ((replay === "R") || (replay === "Q")) {
      return replay;
    }
    throw "[ERROR] R(재시작) 또는 Q(종료)를 입력해 주세요.";
  },

  /**
   * 게임 결과를 출력한다.
   */
  printResult(location, bridgeGame) {
    const RESULT = [bridgeGame.getResult(), bridgeGame.getTrial()];
    const BRIDGE = bridgeGame.getBridge();
    OutputView.printResult(location, BRIDGE[location.length - 1], RESULT);
  },
};

module.exports = InputView;
