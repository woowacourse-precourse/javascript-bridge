const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('다리생성 테스트', () => {
  test.each([[0, 1]])('다리를 생성할 때 0 혹은 1 중 하나가 출력된다.', () => {
    expect(String(BridgeRandomNumberGenerator.generate())).toMatch(/[0-1]/);
  });

  test('다리를 생성할 때 0, 1 랜덤값에 따라 U나 D가 다리에 들어간다.', () => {
    const randomNumbers = [0, 1, 0, 1, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(5, mockGenerator);
    expect(bridge).toEqual(['D', 'U', 'D', 'U', 'U']);
  });
});
