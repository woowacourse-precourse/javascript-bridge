const ResultMaker = require('../src/ResultMaker');

describe('resultMaker 테스트', () => {
  test('resultMaker 테스트1', () => {
    const mockBridge = ['U', 'D', 'D'];
    mockBridge.getbridgePart = jest.fn((x) => mockBridge[x]);
    expect(ResultMaker(mockBridge, mockBridge.length - 1, true)).toBe(
      '[ O |   |   ]\n[   | O | O ]'
    );
  });
  test('resultMaker 테스트2 ', () => {
    const mockBridge = ['U', 'U', 'D', 'U', 'D'];
    mockBridge.getbridgePart = jest.fn((x) => mockBridge[x]);
    expect(ResultMaker(mockBridge, mockBridge.length - 1, true)).toBe(
      '[ O | O |   | O |   ]\n[   |   | O |   | O ]'
    );
  });
});
