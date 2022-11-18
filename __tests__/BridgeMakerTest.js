const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 테스트', () => {
  test.each([
    [
      ['1', '0', '0'],
      ['U', 'D', 'D'],
    ],
    [
      ['0', '0', '0'],
      ['D', 'D', 'D'],
    ],
    [
      ['1', '1', '1', '1'],
      ['U', 'U', 'U', 'U'],
    ],
  ])('다리 생성 테스트', (input, output) => {
    const randomNumbers = input;
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(output.length, mockGenerator);
    expect(bridge).toEqual(output);
  });
});
