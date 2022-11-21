const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { readGameCommand, readMoving, readBridgeSize } = require("./InputView");
const { printResult, returnCheckedMap, printStart, printMap, printOneBlankLine } = require("./OutputView");

class App {
  #size;
  #tryCount;

  constructor() {
    this.#size = 0;
    this.#tryCount = 0;
  }

  /**
   * 앱을 실행시켜 게임 시작 메세지 출력 후 다리의 길이 값을 입력받는다.
   */
  play() {
    printStart();
    readBridgeSize((size) => this.startGame(size));
  }

    /**
   * 다리의 길이 값을 인자로 받아 게임을 시작한다.
   * @param {string} size 다리의 길이가 되었으면 하는 값
   */
  startGame(size) {
    printOneBlankLine();
    this.#size = Number(size);
    const bridgeGame = new BridgeGame(this.#size);
    this.#tryCount += 1;
    this.repeatGame(bridgeGame);
  }

  /**
   * 게임을 결과에 따라 반복 실행한다.
   * @param {class} bridgeGame 다리 건너기 게임의 인스턴스
   */
  repeatGame(bridgeGame) {
    if (bridgeGame.tempPosition === this.#size) {
      this.endGame(bridgeGame, true);
      return;
    }
    readMoving((direction) => {
      printMap(
        returnCheckedMap(bridgeGame.bridge,bridgeGame.tempPosition,bridgeGame.move(direction))
      ),
        bridgeGame.move(direction)
          ? (bridgeGame.cross(), this.repeatGame(bridgeGame))
          : this.restartGame(bridgeGame);
    });
  }

    /**
   * 게임을 재시작한다.
   * @param {class} bridgeGame 다리 건너기 게임의 인스턴스
   */
  restartGame(bridgeGame) {
    readGameCommand((response) => {
      if (bridgeGame.retry(response)) {
        this.#tryCount += 1;
        this.repeatGame(bridgeGame);
        return;
      }
      this.endGame(bridgeGame, false);
    });
  }

  /**
   * 게임을 끝내고 결과를 출력한다.
   * @param {class} bridgeGame 다리 건너기 게임의 인스턴스
   * @param {boolean} result 최종 게임의 성공 여부
   */
  endGame(bridgeGame, result) {
    printResult(
      returnCheckedMap(bridgeGame.bridge, bridgeGame.tempPosition, result),
      result,
      this.#tryCount
    );
  }
}

const app = new App;
app.play()

module.exports = App;
