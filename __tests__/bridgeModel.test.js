const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('makeBridge 테스트', () => {
  BridgeRandomNumberGenerator.generate = jest.fn();

  const size = 10;

  test('size만큼 BridgeRandomNumberGenerator.generate가 실행됩니다.', () => {
    BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

    expect(BridgeRandomNumberGenerator.generate).toBeCalledTimes(10);
  });

  test('bridge 길이와 size가 일치한지 확인합니다.', () => {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

    expect(bridge.length).toBe(size);
  });
});

describe('makeBridge 세부 테스트', () => {
  const mockGenerator = (numbers) => {
    BridgeRandomNumberGenerator.generate = jest.fn();
    numbers.forEach((number) => BridgeRandomNumberGenerator.generate.mockReturnValueOnce(number));
  };

  test('[0, 1, 1, 1, 0]', () => {
    const size = 5;
    mockGenerator([0, 1, 1, 1, 0]);
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    console.log(bridge);

    expect(bridge).toEqual(['D', 'U', 'U', 'U', 'D']);
  });

  test('[1, 1, 1, 1, 1, 0, 0, 0, 0]', () => {
    const size = 9;
    mockGenerator([1, 1, 1, 1, 1, 0, 0, 0, 0]);
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    console.log(bridge);

    expect(bridge).toEqual(['U', 'U', 'U', 'U', 'U', 'D', 'D', 'D', 'D']);
  });
});
