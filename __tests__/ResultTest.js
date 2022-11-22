const Result = require('../src/models/Result');

describe('Result', () => {
  test('인자로 받은 bridge, index, canMoveForward를 이용하여 적절한 결과를 출력한다.', () => {
    const mockBridge = ['U', 'D', 'U'];
    mockBridge.getBridgeFragmentByIndex = jest.fn((index) => mockBridge[index]);

    expect(new Result(mockBridge, 0, true).result).toBe('[ O ]\n[   ]');
    expect(new Result(mockBridge, 1, true).result).toBe('[ O |   ]\n[   | O ]');
    expect(new Result(mockBridge, 2, true).result).toBe('[ O |   | O ]\n[   | O |   ]');
  });
});
