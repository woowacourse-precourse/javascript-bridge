const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validator = require('./Validator');

const { generate } = BridgeRandomNumberGenerator;
/**
 * 다리 건너기 게임을 관리하는 클래스
 * InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
 * BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
 * 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
 * BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
 * BridgeGame의 파일 경로는 변경할 수 있다.
 * BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
 */
class BridgeGame {
  #bridge;
  #userPath = [];
  #numOfAttempts = 1;
  /**
   * BridgeGame 인스턴스를 생성할 때 다리의 사이즈를 받아서 다리를 생성
   * @param {string} size 다리의 길이
   */
  constructor(size) {
    Validator.bridgeSizeValidate(size);
    this.#bridge = BridgeMaker.makeBridge(+size, generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} movement 이동 방향
   */
  move(movement) {
    Validator.movingValidate(movement);
    this.#userPath.push(movement);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
