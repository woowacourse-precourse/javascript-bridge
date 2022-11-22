const OutputView = require("./view/OutputView");
const InputView = require("./view/InputView");
const {
  isBridgeLengthValid,
  isMoveValid,
  isCommandValid,
  printMessage,
} = require("./utils/index");
const { COMMAND_VALUE } = require("./constants/index");

class BridgeGameController {
  #bridgeGame;

  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  /**
   * 다리 게임을 시작한다.
   */
  gameStart() {
    OutputView.printStart();
    InputView.readBridgeSize(this);
  }

  /**
   * 다리를 만드는 게임 단계를 진행한다.
   * @param {string} length 사용자의 다리의 길이 입력값
   */
  proceedCreateBridgeStage(length) {
    try {
      isBridgeLengthValid(length);
      this.#bridgeGame.createBridge(Number(length));
      InputView.readMoving(this);
    } catch (error) {
      printMessage(error);
      InputView.readBridgeSize(this);
    }
  }

  /**
   * 다리를 건너는 게임 단계를 진행한다.
   * @param {string} move 사용자의 이동할 칸 입력값
   */
  proceedMovingState(move) {
    try {
      isMoveValid(move);

      let successStatus = this.#bridgeGame.move(move);
      let [up, down] = this.#bridgeGame.getUpDownStatus();
      OutputView.printMap(up, down);

      if (!successStatus)
        InputView.readGameCommand(this, up, down, successStatus);
      if (successStatus && this.#bridgeGame.isArriveToEnd()) {
        this.#bridgeGame.quit();
        OutputView.printResult(
          up,
          down,
          successStatus,
          this.#bridgeGame.getTotalTry()
        );
      }
      if (successStatus && !this.#bridgeGame.isArriveToEnd())
        InputView.readMoving(this);
    } catch (error) {
      printMessage(error);
      InputView.readMoving(this);
    }
  }

  /**
   * 게임을 재시작 혹은 종료할건지 선택하는 게임 단계를 진행한다.
   * @param {string} command 사용자의 게임 커멘드 입력값
   * @param {string[]} up 위쪽 다리 성공실패 목록
   * @param {string[]} down 아래쪽 다리 성공실패 목록
   * @param {boolean} successStatus 다리를 건널수 있는지 여부
   */
  proceedGameCommandState(command, up, down, successStatus) {
    try {
      isCommandValid(command);
      if (command === COMMAND_VALUE.RESTART) {
        this.#bridgeGame.retry();
        InputView.readMoving(this);
      }
      if (command === COMMAND_VALUE.QUIT) {
        OutputView.printResult(
          up,
          down,
          successStatus,
          this.#bridgeGame.getTotalTry()
        );
        this.#bridgeGame.quit();
      }
    } catch (error) {
      printMessage(error);
      InputView.readGameCommand(this, up, down, successStatus);
    }
  }
}

module.exports = BridgeGameController;
