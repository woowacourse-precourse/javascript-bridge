const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");
const Bridge = require("../Model/Bridge");
const { STATE, GAME_END } = require("../constants/GameCondition.js");
class BridgeGameController {
  #attempt = 1;
  #BridgeGame = new BridgeGame();
  #currentMap;
  start() {
    OutputView.printStartMessage(); // 시작 문구 출력
    InputView.readBridgeSize(this.generateBridge.bind(this));
  }

  generateBridge(size) {
    // 랜덤 다리 정보 Model에 저장.
    const randomBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#BridgeGame.setBridge(randomBridge);
    this.inputMoveDirection();
  }

  inputMoveDirection() {
    InputView.readMoving(this.move.bind(this));
  }

  inputGameCommand() {
    // TODO: change
    InputView.readGameCommand(this.restartOrEnd.bind(this));
  }

  restartOrEnd(cmd) {
    if (cmd === GAME_END.RESTART) {
      this.#BridgeGame.retry();
      this.#attempt += 1;
      this.inputMoveDirection();
    }
    if (cmd === GAME_END.QUIT)
      OutputView.printResult(this.#currentMap, STATE.FAIL, this.#attempt);
  }
  /**
   *
   * @param {char} cmd 'U', 'D' 둘 중 하나로 들어옴.
   */
  move(cmd) {
    const isSuccess = this.#BridgeGame.move(cmd);
    this.#currentMap = this.#BridgeGame.getCurrentMap();
    OutputView.printMap(this.#currentMap[0], this.#currentMap[1]);
    if (!isSuccess) {
      //실패하면 게임 재시작 or 끝내기.
      this.inputGameCommand();
      return;
    }
    if (isSuccess && this.#BridgeGame.isEnd()) {
      //성공하면
      OutputView.printResult(this.#currentMap, STATE.SUCCESS, this.#attempt);
      return;
    }
    this.#BridgeGame.increaseStep();
    this.inputMoveDirection();
  }
}

module.exports = BridgeGameController;
