const Result = require('../src/Result');

describe('Result 테스트', () => {
  test('Result 테스트1', () => {
    const mockBridge = ['U', 'D', 'U'];
    mockBridge.getbridgePart = jest.fn((x) => mockBridge[x]);
    const result = new Result(mockBridge, mockBridge.length - 1, true);

    expect(result.result).toBe('[ O |   | O ]\n[   | O |   ]');
  });

  test('Result 테스트2 ', () => {
    const mockBridge = ['U', 'D', 'D', 'U', 'D'];
    mockBridge.getbridgePart = jest.fn((x) => mockBridge[x]);
    const result = new Result(mockBridge, mockBridge.length - 1, true);

    expect(result.result).toBe('[ O |   |   | O |   ]\n[   | O | O |   | O ]');
  });
});
