const BridgeGame = require("../src/bridge/BridgeGame.js");
const BridgeMaker = require('../src/BridgeMaker.js');
const Validator = require('../src/bridge/Validator.js');

const bridge = new BridgeGame();

describe('다리 게임의 기능 테스트', () => {
  test('설정 테스트', () => {
    const randomNumbers = ["1", "0", "1"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const newBridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(newBridge).toEqual(["U", "D", "U"]);
  });

  test('현재 플래이어의 위치 테스트', () => {
    bridge.move('U');
    bridge.move('D');
    expect(bridge.currentPos).toEqual(['U', 'D']);
  });

  test('다리 상태 초기화 확인 테스트', () => {
    bridge.retry()
    expect(bridge.currentPos).toEqual([]);
    expect(bridge.isPlaying).toBe(true);
    expect(bridge.attempt).toBe(2);
  });

  test('다리 길이 확인 테스트', () => {
    try {
      Validator.validateBridge(1);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  test('다리 방향 확인 테스트', () => {
    try {
      Validator.validateDirect(2);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  test('게임 재시작 입력 확인 테스트', () => {
    try {
      Validator.validateReInput('V');
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});