const BridgeMaker = require('../src/BridgeMaker');

describe('BridgeMaker 객체 테스트', () => {
  test('길이가 3인 다리를 생성한다.', () => {
    const randomNumbers = ['1', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);

    expect(bridge).toEqual(['U', 'D', 'D']);
  });
});
