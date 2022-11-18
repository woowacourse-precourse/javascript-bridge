const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeStore = require('./BridgeStore');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeStore;

  moveCount;

  // TODO: 메세지들 많아짐, 정리
  constructor(welcomeMessage = '다리 건너기 게임을 시작합니다.', bridgeSizeMessage = '다리의 길이를 입력해주세요.', movingMessage = '이동할 칸을 선택해주세요. (위: U, 아래: D)') {
    this.welcomeMessage = welcomeMessage;
    this.bridgeSizeMessage = bridgeSizeMessage;
    this.movingMessage = movingMessage;
    this.moveCount = 0;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    // TODO: command확인
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  createBridge(bridgeSize) {
    // TODO: bridge길이 확인
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.bridgeStore = new BridgeStore(bridge);
  }

  runGame(bridgeSize) {
    this.createBridge(bridgeSize);
  }

  init() {
    OutputView.print(this.welcomeMessage);
    InputView.readBridgeSize(this.bridgeSizeMessage, this.runGame);
  }
}

module.exports = BridgeGame;
