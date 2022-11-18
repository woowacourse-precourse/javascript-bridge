const { Console } = require("@woowacourse/mission-utils");
const { BridgeMaker } = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

afterEach(() => {
  Console.close();
});

describe('BridgeMaker 객체의 makeBridge() 메서드 테스트', () => {
  test('입력한 사이즈 만큼의 다리 개수가 만들어지는지 확인', () => {
    const bridge = BridgeMaker.makeBridge(3, BridgeRandomNumberGenerator.generate);
    const bridgeLength = bridge.length;
    expect(bridgeLength).toEqual(3);
  });
  test('다리의 길이를 많이 만들어도 내부의 값은 U or D 만 있는지 확인', () => {
    const longBridge = BridgeMaker.makeBridge(15, BridgeRandomNumberGenerator.generate);
    const notDuplicated = Array.from([...new Set(longBridge)]);
    expect([["U", "D"], ["D", "U"]]).toContainEqual(notDuplicated);
  });
});

describe('BridgeMaker 객체의 randomNumberToUpAndDown() 메서드 테스트', () => {
  test('키값으로 0이 들어왔을떄 "D" 반환하는지확인', () => {
    const randomNumber = 0;
    const stringUOrD = BridgeMaker.randomNumberToUpAndDown(randomNumber);
    expect(stringUOrD).toEqual('D');
  });
  test('키값으로 0이 들어왔을떄 "D", 1이 들어왔을때 "U"를 반환하는지 확인', () => {
    const randomNumber = [0, 1];
    const stringUOrD = randomNumber.map((x) => BridgeMaker.randomNumberToUpAndDown(x));
    expect(stringUOrD).toEqual(['D', 'U']);
  });
});
