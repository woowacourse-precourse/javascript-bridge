const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const BridgeMaker = require('../src/BridgeMaker');

describe('[MAKING TEST] 다리 생성 테스트', () => {
  test('[CASE1] 전달 받은 사이즈만큼 다리 만들기', () => {
    const errorTest = () =>
      BridgeMaker.makeBridge(19, BridgeRandomNumberGenerator.generate);
    expect(errorTest().length).toBe(19);
  });
});
