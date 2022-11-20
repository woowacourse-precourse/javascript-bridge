const BridgeGame = require("./BridgeGame");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MSG } = require("./constants/Message");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #bridgeGame;
  #retryCount;

  constructor() {
    this.#retryCount = 1;
  }

  play() {
    Console.print(GAME_MSG.START);
    InputView.readBridgeSize(this.createBridgeGame.bind(this));
  }

  /**
   * 다리생성 메서드
   * @param {number} size 다리길이 3이상 20이하
   */
  createBridgeGame(size) {
    this.#bridgeGame = new BridgeGame();
    this.#bridgeGame.setBridge(size);
    this.playBridgeGame();
  }

  /**
   * 다리 건너기 게임을 시작해 입력받는 메서드
   */
  playBridgeGame() {
    InputView.readMoving(this.checkBridge.bind(this));
  }

  /**
   * 다리 건니기에 실패했을 경우 재시작할건지 종료할건지 결정하는 메서드
   * @param {string} command 사용장 입력문자 R혹은 Q
   */
  retry(command) {
    if (command === "Q") this.gameEnd(false);
    if (command === "R") {
      this.#bridgeGame.retry(this.#retryCount);
      this.playBridgeGame();
    }
  }

  /**
   * 게임이 종료되었을 경우 결과값을 출력해주는 메서드
   * @param {string[][]} result 최종 다리 상태
   */
  gameEnd(result) {
    OutputView.printResult(
      result,
      this.#retryCount,
      this.#bridgeGame.getBridge()
    );
    Console.close();
  }

  /**
   * 이동하기 위해 성공인지 실패인지 확인하는 메서드
   * @param {number} moving 이동할 위치 U혹은 D
   */
  checkBridge(moving) {
    // 숫자가 아닌 문자로 결과값받기
    const [isSuccess, crossBridge] = this.#bridgeGame.move(moving);
    OutputView.printMap(crossBridge);
    if (isSuccess === 0) InputView.readGameCommand(this.retry.bind(this));
    if (isSuccess === 1) this.playBridgeGame();
    if (isSuccess === 2) this.gameEnd(true);
  }
}

module.exports = App;
const app = new App();
app.play();
