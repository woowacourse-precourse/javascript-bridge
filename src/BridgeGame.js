const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeStore = require('./BridgeStore');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeValidator = require('./BridgeValidator');

const INITIAL_GAME_COUNT = 1;
const INITIAL_BRIDGE_SIZE = {
  min: 3,
  max: 20,
};
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeStore;

  moveCount;

  tryCount = 1;

  // TODO: 메세지들 많아짐, 정리
  constructor(
    bridgeSize = INITIAL_BRIDGE_SIZE,
    welcomeMessage = '다리 건너기 게임을 시작합니다.',
    bridgeSizeMessage = '다리의 길이를 입력해주세요.\n',
    movingMessage = '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    retryMessage = '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  ) {
    this.bridgeValidator = new BridgeValidator({ bridgeSize });
    this.welcomeMessage = welcomeMessage;
    this.bridgeSizeMessage = bridgeSizeMessage;
    this.movingMessage = movingMessage;
    this.retryMessage = retryMessage;
    this.moveCount = 0;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move = (command) => {
    // TODO: command확인
    const isMovable = this.bridgeStore.isMovable(this.moveCount, command);

    this.bridgeStore.addUserInputResult(isMovable);
    OutputView.printMap(this.moveCount, command, this.bridgeStore.getUserInputResult);

    if (!isMovable) {
      this.fail();
      return;
    }
    this.moveCount += 1;

    if (this.bridgeStore.isGameClear(this.moveCount)) {
      this.end();
      return;
    }

    InputView.readMoving(this.movingMessage, this.move);
  };

  confirmRetry = (command) => {
    const run = {
      R: this.retry,
      Q: this.end,
    };

    run[command]();
  };

  fail = () => {
    this.moveCount = 0;
    InputView.readGameCommand(this.retryMessage, this.confirmRetry);
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry = () => {
    this.bridgeStore.retry();
    InputView.readMoving(this.movingMessage, this.move);
  };

  createBridge(bridgeSize) {
    this.bridgeValidator.isValidBridgeSize(bridgeSize);
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.bridgeStore = new BridgeStore(bridge, INITIAL_GAME_COUNT);
  }

  end = () => {
    // TODO: 게임 결과 출력
    OutputView.printResult(this.bridgeStore.getGameResult(this.moveCount));
    InputView.close();
  };

  runGame = (bridgeSize) => {
    this.createBridge(bridgeSize);

    // while (!this.bridgeStore.isSameWithBridgeLength(this.moveCount)) {
    InputView.readMoving(this.movingMessage, this.move);
    // }
  };

  init() {
    OutputView.print(this.welcomeMessage);
    InputView.readBridgeSize(this.bridgeSizeMessage, this.runGame);
  }
}

module.exports = BridgeGame;
