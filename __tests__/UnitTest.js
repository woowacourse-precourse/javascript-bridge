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

  describe('이동 및 이동 여부 확인', () => {
    beforeEach(() => {
      bridgeGame.bridgeStore = new BridgeStore(['U', 'D', 'U'], 1);
    });

    describe('move 메서드', () => {
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

    describe('isMoved 메서드', () => {
      test('올바른 이동 확인', () => {
        expect(bridgeGame.isMoved('U')).toBeTruthy();
      });

      test('올바르지 않은 이동 확인', () => {
        expect(bridgeGame.isMoved('D')).toBeFalsy();
      });
    });

    describe('moveCount 확인', () => {
      beforeEach(() => {
        bridgeGame.move('U');
      });

      test.each([[2, true], [1, false]])('이동 횟수와 비교 동작 확인', (input, expected) => {
        expect(bridgeGame.isBiggerThanMoveCount(input)).toBe(expected);
      });
    });
  });
});

describe('BridgeStore 테스트', () => {
  let store;

  beforeEach(() => {
    store = new BridgeStore(['U', 'D', 'U'], 1);
  });

  test.each([[0, 'U', true], [0, 'D', false], [1, 'D', true], [2, 'D', false]])('이동가능 여부 확인', (idx, input, expected) => {
    expect(store.isMovable(idx, input)).toBe(expected);
  });

  test.each([[3, true], [1, false], [2, false], [10, false]])('다리 길이 테스트', (number, expected) => {
    expect(store.isSameWithBridgeLength(number)).toBe(expected);
  });

  describe('사용자 입력 저장 테스트', () => {
    const testData = '테스트';

    test('사용자 입력 저장', () => {
      store.addUserInputResult(testData);
      expect(store.getUserInputResultLength()).toBe(1);
    });

    test('사용자 입력 조회', () => {
      store.addUserInputResult(testData);
      expect(store.getUserInputResult(0)).toBe(testData);
    });
  });

  describe('게임결과 테스트', () => {
    beforeEach(() => {
      Array.from({ length: 3 })
        .fill({ result: true })
        .map((el) => store.addUserInputResult(el));
    });

    test('게임 결과 조회 테스트', () => {
      const expected = {
        isGameClear: true,
        tryCount: 1,
      };

      expect(store.getGameResult()).toEqual(expect.objectContaining(expected));
    });

    test('게임 종료 여부 확인 테스트', () => {
      expect(store.isGameClear()).toEqual(true);
    });
  });

  test('재시도 테스트', () => {
    Array.from({ length: 2 })
      .fill({ result: false })
      .map((el) => store.addUserInputResult(el));

    store.retry();
    expect(store.getUserInputResultLength()).toEqual(0);
  });
});
