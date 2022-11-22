const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

test.each([[3], [13], [20]])(
  '다리 길이를 입력하면 길이에 맞게 다리를 만들어 내는지 테스트',
  (length) => {
    const func = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate
    );
    console.log(func);
    expect(func.length).toBe(length);
  }
);
