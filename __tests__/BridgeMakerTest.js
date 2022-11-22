const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 테스트', () => {
  test('다리 길이 3인 경우', () => {
    const randomNumbers = [1, 0, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'U']);
  });

  test('다리 길이 20인 경우', () => {
    const randomNumbers = [
      1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0,
    ];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(20, mockGenerator);
    expect(bridge).toEqual([
      'U',
      'D',
      'U',
      'D',
      'D',
      'U',
      'U',
      'U',
      'U',
      'D',
      'D',
      'U',
      'D',
      'U',
      'U',
      'U',
      'D',
      'U',
      'D',
      'D',
    ]);
  });
});
