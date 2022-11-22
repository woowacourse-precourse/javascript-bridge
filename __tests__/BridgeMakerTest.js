
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const BridgeMaker = require('../src/BridgeMaker');
const generator = BridgeRandomNumberGenerator.generate;
jest.mock('../src/BridgeRandomNumberGenerator');

const mockList = (List) => {
  List.forEach((Test) => {
    generator.mockReturnValueOnce(Test);
  });
};

describe('1과0을 U과D로 만든다.', () => {
  test('테스트 케이스 1', () => {
    mockList(['1', '1', '1', '1', '0', '0', '0', '0']);
    const make = BridgeMaker.makeBridge(8, generator);
    expect(make).toEqual(['U', 'U', 'U', 'U', 'D', 'D', 'D', 'D']);
  });

  test('테스트 케이스 2', () => {
    mockList(['0', '0', '0']);
    const make = BridgeMaker.makeBridge(3, generator);
    expect(make).toEqual(['D', 'D', 'D']);
  });
});