const BridgeMaker = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');

const isArrConsistsOfUAndD = (arr) => {
  return arr.every((elem) => elem === 'U' || elem === 'D');
};

describe('다리 생성함수 BridgeMaker 테스트 ', () => {
  test('생성된 다리 배열은 U나 D로만 이루어져 있다', () => {
    const bridgeArr = BridgeMaker.makeBridge(3, generate);
    expect(isArrConsistsOfUAndD(bridgeArr)).toBeTruthy();
  });
});
