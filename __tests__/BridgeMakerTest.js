const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 테스트', () => {
  test('랜덤 숫자에 맞는 칸으로 생성되는지 테스트', () => {
    const randomNumbers = [0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => acc.mockReturnValueOnce(number), jest.fn());
    const bridge = BridgeMaker.makeBridge(15, mockGenerator);
    expect(bridge).toEqual(['D', 'D', 'D', 'U', 'U', 'D', 'U', 'D', 'U', 'D', 'U', 'D', 'U', 'D', 'U']);
  });
});
