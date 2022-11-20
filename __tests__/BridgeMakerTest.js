const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/Model/BridgeRandomNumberGenerator');

const size = 5;
const generateRandomNumber = BridgeRandomNumberGenerator.generate;
const result = BridgeMaker.makeBridge(size, generateRandomNumber);

describe('다리 만들기 테스트', () => {
  test('다리는 대문자 U 또는 D를 값으로 가진다.', () => {
    expect(result.includes(BridgeMaker.LOWER_BLOCK || BridgeMaker.UPPER_BLOCK)).toBeTruthy();
  });

  test('다리의 길이는 size와 같다.', () => {
    expect(result.length).toBe(5);
  });
});

