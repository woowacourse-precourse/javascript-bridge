const BridgeMaker = require('../../src/BridgeMaker');

describe('다리 생성 테스트', () => {
  test('다리 정상 생성 테스트 1', () => {
    const randomNumbers = ['1', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('다리 정상 생성 테스트 2', () => {
    const randomNumbers = ['0', '0', '0', '1', '1', '1', '0', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(9, mockGenerator);
    expect(bridge).toEqual(['D', 'D', 'D', 'U', 'U', 'U', 'D', 'D', 'D']);
  });

  test('다리 정상 생성 테스트 3', () => {
    const randomNumbers = [
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
      '0',
    ];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(20, mockGenerator);
    expect(bridge).toEqual([
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
      'D',
    ]);
  });
});
