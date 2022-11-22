const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");
const Bridge = require("../Model/Bridge");
const { STATE, GAME_END } = require("../constants/GameCondition.js");
class BridgeGameController {
  #attempt = 1; // 시도 횟수
  #BridgeGame = new BridgeGame();
  #currentMap; // 현재 마킹된 맵

  /**
   * 게임을 시작할 때 호출하는 메서드.
   * 시작 문구를 출력하고 다리 길이를 입력하는 기능을 한다.
   */
  start() {
    OutputView.printStartMessage(); // 시작 문구 출력
    InputView.readBridgeSize(this.generateBridge.bind(this));
  }

  /**
   * 랜덤 다리 정보를 생성하는 메서드
   * 랜덤 다리 정보를 저장하고 이동에 대한 입력을 호출한다.
   * @param {number} size 사용자가 입력한 다리 길이.
   */
  generateBridge(size) {
    // 랜덤 다리 정보 Model에 저장.
    const randomBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#BridgeGame.setBridge(randomBridge);
    this.inputMoveDirection();
  }

  /**
   * 사용자가 이동에 대한 커멘드를 입력하는 기능을 하는 메서드.
   */
  inputMoveDirection() {
    InputView.readMoving(this.move.bind(this));
  }

  /**
   * 사용자가 게임을 재시작 or 종료에 대한 입력을 하는 메서드.
   */
  inputGameCommand() {
    InputView.readGameCommand(this.restartOrEnd.bind(this));
  }

  /**
   * 이동에 관련된 기능을 하는 메서드.
   * @param {string} moveCmd 사용자가 입력한 이동 커멘드 -> 'U', 'D' 중 하나.
   */
  move(moveCmd) {
    const isSuccess = this.#BridgeGame.move(moveCmd); //
    this.#currentMap = this.#BridgeGame.getCurrentMap();
    OutputView.printMap(this.#currentMap[0], this.#currentMap[1]);
    if (!isSuccess) {
      //이동 실패하면 게임 재시작 or 끝내기
      this.inputGameCommand();
      return;
    }
    if (isSuccess && this.#BridgeGame.isEnd()) {
      //이동 성공 & 게임이 종료되면 게임 결과를 출력
      OutputView.printResult(this.#currentMap, STATE.SUCCESS, this.#attempt);
      return;
    }
    // 이동 성공만 해당하면 다음 입력을 받는다.
    this.#BridgeGame.increaseStep();
    this.inputMoveDirection();
  }

  /**
   * 종료 or 재시작 커멘드에 따라 기능을 하는 메서드.
   * 재시작 커멘드(R)을 입력하면 BridgeGame 클래스의 retry()함수를 호출하고 시도 횟수를 늘리고 이동 입력을 다시 받는다.
   * 종료(Q)를 입력하면 게임 결과를 출력한다.
   * @param {string} gameCmd 종료 or 재시작 커멘드 -> 'R', 'Q' 중 하나.
   */
  restartOrEnd(gameCmd) {
    if (gameCmd === GAME_END.RESTART) {
      this.#BridgeGame.retry();
      this.#attempt += 1;
      this.inputMoveDirection();
    }
    if (gameCmd === GAME_END.QUIT)
      OutputView.printResult(this.#currentMap, STATE.FAIL, this.#attempt);
  }
}

module.exports = BridgeGameController;
