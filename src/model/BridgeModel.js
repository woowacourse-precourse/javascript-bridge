const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { DIRECTION } = require('../constants');
const Bridge = require('../Bridge');

class BridgeModel {

  constructor() {
    this.tryCount = 1;
    this.init();
  }


  /**
   * * 클래스 변수를 초기화할때 사용하는 메서드
   */
  init() {
    this.moveCount = 0;
    this.map = [[],[]];
    this.isRight = false;
  }

  /**
   * * 이동시 클래스 변수들을 일괄적으로 업데이트할때 사용하는 메서드
   * @param {boolean} isRight 입력값과 정답 비교 결과값
   */
  updateState(isRight) {
    this.moveCount++;
    this.isRight = isRight;
  }

  /**
   * * 다리 길이 배열을 생성하여 Bridge 인스턴스를 생성하는 메서드
   * @param {number} length 사용자의 다리 길이 입력값
   */
  buildBridge(length) {
    const { generate } = BridgeRandomNumberGenerator
    const randomArray = BridgeMaker.makeBridge(length, generate);
    this.bridge = new Bridge(randomArray);
  }

  /**
   * * bridge 인스턴스로부터 정답 비교 결과값을 받아 반환하는 메서드
   * @param {string} direction 사용자의 다리 진행방향 입력값
   */
  stepForward(direction) {
    const [isRight, isDone] = this.bridge.checkAnswer(this.moveCount, direction);
    this.updateState(direction, isRight);
    this.paintMap(direction, isRight);
    return [isRight, isDone];
  }

  /**
   * * 사용자의 진행상황을 Map 배열에 표시하는 메서드
   * @param {string} direction 사용자의 다리 진행방향 입력값
   * @param {boolean} isRight 사용자의 입력값과 다리 배열과의 정답 비교 결과값
   */
  paintMap(direction, isRight) {
    if( direction === DIRECTION.UP ) {
      this.map[0].push(isRight ? 'O' : 'X');
      this.map[1].push(' ');
    }
    if( direction === DIRECTION.DOWN ) {
      this.map[1].push(isRight ? 'O' : 'X');
      this.map[0].push(' ');
    } 
  }
}

module.exports = BridgeModel;
