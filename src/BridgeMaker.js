/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    this.handleBridgeLengthInput(size);
    let bridge = [];
    let bridgeShape = [];
    for (let i = 0; i < size; i++) {
      bridge.push(generateRandomNumber);
    }

    console.log('Generate bridge:' + bridge);
    bridgeShape = this.changeToUD(size, bridge);

    return bridgeShape;
  },

  changeToUD(size, bridge) {
    let UDBridge = [];
    for (let i = 0; i < size; i++) {
      if (Number(bridge[i]) === 0) {
        UDBridge.push('D');
      } else {
        UDBridge.push('U');
      }
    }

    return UDBridge;
  },
  handleBridgeLengthInput(length) {
    if (this.checkIsNaN(length)) {
      throw new Error(ConstValue.BRIDGE_LENGTH_INPUT_ERROR_MESSAGE.NOT_A_NUMBER_EXCEPTION);
    }

    if (this.checkNotInRange(length)) {
      throw new Error(ConstValue.BRIDGE_LENGTH_INPUT_ERROR_MESSAGE.NOT_IN_RANGE_EXCEPTION);
    }
  },

  checkIsNaN(length) {
    if (isNaN(length)) {
      return true;
    }

    return false;
  },

  checkNotInRange(length) {
    if (length < ConstValue.MIN_BRIDGE_LENGTH || length > ConstValue.MAX_BRIDGE_LENGTH) {
      return true;
    }

    return false;
  },
};

module.exports = BridgeMaker;
