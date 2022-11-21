/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const RESULT = [];
    for (let i = 0; i < size; i++) {
      const RANDOM = generateRandomNumber().toString();
      RANDOM === '0' ? RESULT.push('D') : RESULT.push('U');
    }
    return RESULT;
  },
};

module.exports = BridgeMaker;
