const BridgeMaker = require('../src/BridgeMaker');

describe('다리가 올바르게 생성되는지 테스트한다.', () => {
  test('문자 0, 1이 들어온 경우 U, D로 바꿔 반환한다.', () => {
    const randomNumbers = ['0', '0', '0', '1', '1', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(6, mockGenerator);
    expect(bridge).toEqual(['D', 'D', 'D', 'U', 'U', 'U']);
  });

  test('숫자 0, 1이 들어온 경우 U, D로 바꿔 반환한다.', () => {
    const randomNumbers = [0, 0, 0, 1, 1, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(6, mockGenerator);
    expect(bridge).toEqual(['D', 'D', 'D', 'U', 'U', 'U']);
  });
});
