const SETTING = require('../src/constants/gameSetting');
const Bridge = require('../src/Domain/Bridge');

describe('Bridge 기능 테스트', () => {
  const bridge = new Bridge([SETTING.MOVING_UP, SETTING.MOVING_DOWN, SETTING.MOVING_UP]);
  test('다리의 길이 확인', () => {
    expect(bridge.getBridgeSize()).toBe(3);
  });

  test('첫번째 이동 시 위로 이동할 수 있다.', () => {
    expect(bridge.canICross(0, SETTING.MOVING_UP)).toBeTruthy();
  });

  test('첫번째 이동 시 아래로 이동할 수 없다.', () => {
    expect(bridge.canICross(0, SETTING.MOVING_DOWN)).toBeFalsy();
  });
});

describe('예외 테스트', () => {
  describe('다리 생성 시', () => {
    test('유효한 다리 길이가 아닐 때', () => {
      expect(() => {
        const bridge = new Bridge([SETTING.MOVING_UP, SETTING.MOVING_DOWN]);
      }).toThrow('[ERROR]');
    });

    test('위, 아래로 이동할 수 있는 다리가 아닐 때', () => {
      expect(() => {
        const bridge = new Bridge([SETTING.MOVING_UP, SETTING.MOVING_DOWN, 'UP']);
      }).toThrow('[ERROR]');
    });
  });

  describe('다리를 건널 수 있는지 확인 시', () => {
    const bridge = new Bridge([SETTING.MOVING_UP, SETTING.MOVING_DOWN, SETTING.MOVING_UP]);

    test('이동 횟수가 숫자가 아닐 때', () => {
      expect(() => bridge.canICross('ONE', SETTING.MOVING_UP)).toThrow('[ERROR]');
    });

    test('위, 아래가 아닌 곳을 이동했을 때', () => {
      expect(() => bridge.canICross(1, 'DOWN')).toThrow('[ERROR]');
    });

    test('이동할 거리가 다리의 길이보다 길 때', () => {
      expect(() => bridge.canICross(4, SETTING.MOVING_UP)).toThrow('[ERROR]');
    });
  });
});
