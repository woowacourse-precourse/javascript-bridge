const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 테스트', () => {
  test('최소 길이의 다리 생성 테스트', () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('최대 길이의 다리 생성 테스트', () => {
    const randomNumbers = [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(20, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D', 'U', 'D', 'D', 'U', 'D', 'U', 'D', 'D', 'U', 'D', 'U', 'U', 'D', 'U', 'D', 'U', 'D']);
  });
});