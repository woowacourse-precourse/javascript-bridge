const BridgeMaker = require('../src/BridgeMaker');

describe('BridgeMaker 테스트', () => {
  test('랜덤 숫자 생성하여 U/D로 변환', () => {
    expect(BridgeMaker.makeBridge(3, () => 1)).toEqual(
      expect.arrayContaining(['U', 'U', 'U'])
    );
  });
});
