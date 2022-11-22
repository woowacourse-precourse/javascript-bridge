const BridgeGame = require('../src/BridgeGame');
const BridgeStore = require('../src/BridgeStore');
const MapMaker = require('../src/MapMaker');

describe('MapMaker 테스트', () => {
  const commands = ['U', 'D', 'D', 'U', 'D'];
  const getUserInputResult = (result) => (i) => ({ command: commands[i], result: result[i] });

  test('이동불가능한 입력이 있는 경우 테스트', () => {
    const result = [true, false];
    const map = new MapMaker(result.length, getUserInputResult(result)).create();

    expect(map).toBe(['[ O |   ]', '[   | X ]'].join('\n'));
  });

  test('모두 이동한 경우 테스트', () => {
    const result = Array.from({ length: commands.length }).fill(true);
    const map = new MapMaker(result.length, getUserInputResult(result)).create();

    expect(map).toBe(['[ O |   |   | O |   ]', '[   | O | O |   | O ]'].join('\n'));
  });
});

describe('BridgeGame테스트', () => {
  let bridgeGame;

  beforeEach(() => {
    bridgeGame = new BridgeGame();
  });

  describe('다리 생성', () => {
    test('숫자 입력에 알맞은 다리 생성 테스트', () => {
      const userInputs = ['3', '5', '10'];
      const result = [];

      userInputs.forEach((input) => {
        bridgeGame.createBridge(input);
        result.push(bridgeGame.bridgeStore.isSameWithBridgeLength(Number(input)));
      });
      expect(result.every((el) => el)).toBeTruthy();
    });

    test.each(['', ' ', '300', 'ㅁ', 'a', '*'])('올바르지 않은 입력 발생시 에러 throw', (input) => {
      expect(
        () => bridgeGame.createBridge(input),
      ).toThrow('[ERROR]');
    });
  });

  describe('이동', () => {
    beforeEach(() => {
      bridgeGame.bridgeStore = new BridgeStore(['U', 'D', 'U'], 1);
    });
    test('올바른 입력으로 이동 성공', () => {
      expect(bridgeGame.move('U')).toBeTruthy();
    });

    test('올바르지 않은 입력(잘못된 칸 선택)으로 이동 실패', () => {
      expect(bridgeGame.move('D')).toBeFalsy();
    });

    test.each(['', ' ', '1', 'Y', '다시'])('올바르지 않은 입력 발생시 에러 throw', (input) => {
      expect(
        () => bridgeGame.move(input),
      ).toThrow('[ERROR]');
    });
  });
});
