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
    bridgeSizeMessage = '\n다리의 길이를 입력해주세요.\n',
    movingMessage = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    retryMessage = '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  ) {
    this.bridgeValidator = new BridgeValidator({ bridgeSize });
    this.welcomeMessage = welcomeMessage;
    this.bridgeSizeMessage = bridgeSizeMessage;
    this.movingMessage = movingMessage;
    this.retryMessage = retryMessage;
    this.moveCount = 0;
  }

  tryCatchWrapper = (func, retry) => (args) => {
    try {
      func(...args);
    } catch (error) {
      OutputView.printError(error);

      const nextFunc = retry || func.apply(this, ...args);
      nextFunc();
    }
  };

  increaseMoveCount = () => {
    this.moveCount += 1;
  };

  resetMoveCount = () => {
    this.moveCount = 0;
  };

  detectIsMovable = (command) => {
    if (!this.bridgeStore.isMovable(this.moveCount, command)) {
      this.fail();
      return false;
    }

    this.increaseMoveCount();
    return true;
  };

  detectIsGameClear = () => {
    if (!this.bridgeStore.isGameClear()) {
      return false;
    }

    this.end();
    return true;
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move = this.tryCatchWrapper((command) => {
    this.bridgeValidator.isValidCommand('move', command);
    this.setMovedData(command);

    if (!this.detectIsMovable(command) || this.detectIsGameClear()) {
      return;
    }

    InputView.readMoving(this.movingMessage, this.move);
  }, () => {
    InputView.readMoving(this.movingMessage, this.move);
  });

  setMovedData = (command) => {
    this.bridgeStore.addUserInputResult(
      { command, result: this.bridgeStore.isMovable(this.moveCount, command) },
    );
    OutputView.printMap(
      this.bridgeStore.getUserInputResultLength(),
      this.bridgeStore.getUserInputResult,
    );
  };

  confirmRetry = this.tryCatchWrapper((command) => {
    this.bridgeValidator.isValidCommand('retry', command);

    const run = {
      R: this.retry,
      Q: this.end,
    };

    run[command]();
  }, () => {
    InputView.readGameCommand(this.retryMessage, this.confirmRetry);
  });

  fail = () => {
    this.resetMoveCount();
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
    OutputView.printResult(
      this.bridgeStore.getUserInputResultLength(),
      this.bridgeStore.getUserInputResult,
      this.bridgeStore.getGameResult(),
    );
    InputView.close();
  };

  // TODO: 다시 func()를 실행하면 입력부터 다시 받지 않는다.나를 호출한 위치를 찾을 수는 없나?
  // NOTE: (func, retry) 이런식으로 tryCatchWrapper가 작성되어있는데... retry 이부분에 일일이 적어줘야함??
  // NOTE: 결국 전부 retry로 되어있네.. 흠
  // NOTE: tryCatchWrapper 라는 이름 변경
  runGame = this.tryCatchWrapper(
    (bridgeSize) => {
      this.createBridge(bridgeSize);
      InputView.readMoving(this.movingMessage, this.move);
    },
    () => {
      InputView.readBridgeSize(this.bridgeSizeMessage, this.runGame);
    },
  );

  init() {
    OutputView.print(this.welcomeMessage);
    InputView.readBridgeSize(this.bridgeSizeMessage, this.runGame);
  }
}

module.exports = BridgeGame;
