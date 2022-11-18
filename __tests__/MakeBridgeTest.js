const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('다리 생성 테스트', () => {
  test('입력한 길이에 맞게 다리 생성', () => {
    const sizeValue = [3, 10, 15, 20];

    sizeValue.forEach((size) => {
      const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      expect(bridge).toHaveLength(size);
    });
  });

  test('올바른 문자열로 바뀌는지 테스트', () => {
    const randomNumbers = [['1', '0', '0'], ['0', '0', '0'], ['1', '1', '1']];
    const answer = [['U', 'D', 'D'], ['D', 'D', 'D'], ['U', 'U', 'U']];

    for (let i = 0; i < 3; i++) {
      let mockGenerator = randomNumbers[i].reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
      }, jest.fn());
      
      const bridge = BridgeMaker.makeBridge(3, mockGenerator);
      expect(bridge).toEqual(answer[i]);
    };
  });
});