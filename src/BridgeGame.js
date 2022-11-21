const ConstValue = require('./ConstValue');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  constructor(bridge) {
    this.bridge = bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge, input) {
    let upperBridge = '';
    let underBridge = '';
    for (let i = 0; i < bridge.length; i++) {
      upperBridge = this.moveUpperBridge(upperBridge, input, bridge[i]);
      underBridge = this.moveUnderBridge(underBridge, input, bridge[i]);
      if (this.checkXExist(upperBridge, underBridge)) {
        break;
      }
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  moveUpperBridge(upperBridge, input, bridgePiece) {
    if (upperBridge === '') {
      upperBridge = this.checkUpperFirst(upperBridge, bridgePiece, input);
      return upperBridge;
    }

    upperBridge = this.checkUpper(upperBridge, input, bridgePiece);

    return upperBridge;
  }

  moveUnderBridge(underBridge, input, bridgePiece) {
    if (underBridge === '') {
      underBridge = this.checkUnderFirst(underBridge, bridgePiece, input);
      return underBridge;
    }

    underBridge = this.checkUnder(underBridge, input, bridgePiece);

    return underBridge;
  }

  checkUpperFirst(upperBridge, bridgePiece, input) {
    if (bridgePiece === 'U' && input === 'U') {
      upperBridge = ConstValue.APPEND_BRIDGE_FIRST.CORRECT;
      return upperBridge;
    } else if (bridgePiece === 'D' && input === 'U') {
      upperBridge = ConstValue.APPEND_BRIDGE_FIRST.WRONG;
      return upperBridge;
    } else if (input === 'D') {
      upperBridge = ConstValue.APPEND_BRIDGE_FIRST.NONE;
      return upperBridge;
    }
  }

  checkUnderFirst(underBridge, bridgePiece, input) {
    if (bridgePiece === 'D' && input === 'D') {
      underBridge = ConstValue.APPEND_BRIDGE_FIRST.CORRECT;
      return underBridge;
    } else if (bridgePiece === 'U' && input === 'D') {
      underBridge = ConstValue.APPEND_BRIDGE_FIRST.WRONG;
      return underBridge;
    } else if (input === 'U') {
      underBridge = ConstValue.APPEND_BRIDGE_FIRST.NONE;
      return underBridge;
    }
  }

  checkUpper(upperBridge, input, bridgePiece) {
    if (bridgePiece === 'U' && input === 'U') {
      upperBridge += ConstValue.APPEND_BRIDGE.CORRECT;
    } else if (bridgePiece === 'D' && input === 'U') {
      upperBridge += ConstValue.APPEND_BRIDGE.WRONG;
    } else if (input === 'D') {
      upperBridge += ConstValue.APPEND_BRIDGE.NONE;
    }

    return upperBridge;
  }

  checkUnder(underBridge, input, bridgePiece) {
    if (bridgePiece === 'D' && input === 'D') {
      underBridge += ConstValue.APPEND_BRIDGE.CORRECT;
    } else if (bridgePiece === 'U' && input === 'D') {
      underBridge += ConstValue.APPEND_BRIDGE.WRONG;
    } else if (input === 'U') {
      underBridge += ConstValue.APPEND_BRIDGE.NONE;
    }

    return underBridge;
  }

  checkXExist(upperBridge, underBridge) {
    if (upperBridge.includes('X')) {
      return true;
    }

    if (underBridge.includes('X')) {
      return true;
    }

    return false;
  }
}

module.exports = BridgeGame;
