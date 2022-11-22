const BridgeValidator = require('../src/Bridge.validator');
const { BRIDGE_LENGTH_MAX, BRIDGE_LENGTH_MIN } = require('../src/Resource');

describe('Validator 테스트', () => {
  test(`브릿지의 길이는 ${BRIDGE_LENGTH_MIN}이상 ${BRIDGE_LENGTH_MAX}이하 이다.`, () => {
    expect(() => {
      BridgeValidator.checkInputBridgeLength(2);
    }).toThrow();
  });
  test(`브릿지의 길이는 ${BRIDGE_LENGTH_MIN}이상 ${BRIDGE_LENGTH_MAX}이하 이다.`, () => {
    expect(() => {
      BridgeValidator.checkInputBridgeLength(21);
    }).toThrow();
  });
  test(`브릿지의 길이는 ${BRIDGE_LENGTH_MIN}이상 ${BRIDGE_LENGTH_MAX}이하 이다.`, () => {
    expect(() => {
      BridgeValidator.checkInputBridgeLength(20);
    }).not.toThrow();
  });
  test('브릿지의 길이는 숫자이다.', () => {
    expect(() => {
      BridgeValidator.checkInputBridgeLength('a');
    }).toThrow();
  });

  test('브릿지는 배열이어야 한다', () => {
    const bridge = 'bridge';
    expect(() => {
      BridgeValidator.checkBridge(bridge, BRIDGE_LENGTH_MIN, BRIDGE_LENGTH_MAX);
    }).toThrow();
  });
  test(`브릿지의 길이는 ${BRIDGE_LENGTH_MIN}이상 ${BRIDGE_LENGTH_MAX}이하 이다.`, () => {
    const bridge = ['U', 'D'];
    expect(() => {
      BridgeValidator.checkBridge(bridge, BRIDGE_LENGTH_MIN, BRIDGE_LENGTH_MAX);
    }).toThrow();
  });
  test(`브릿지의 길이는 ${BRIDGE_LENGTH_MIN}이상 ${BRIDGE_LENGTH_MAX}이하 이다.`, () => {
    const bridge = Array.from({ length: 21 }, () => {
      'U';
    });
    expect(() => {
      BridgeValidator.checkBridge(bridge, BRIDGE_LENGTH_MIN, BRIDGE_LENGTH_MAX);
    }).toThrow();
  });
  test('브릿지는 모두 U, D중 하나이어야 한다.', () => {
    const bridge = Array.from({ length: 20 }, () => {
      'U';
    });
    bridge[3] = 'T';
    expect(() => {
      BridgeValidator.checkBridge(bridge, BRIDGE_LENGTH_MIN, BRIDGE_LENGTH_MAX);
    }).toThrow();
  });
  test(`브릿지의 길이는 ${BRIDGE_LENGTH_MIN}이상 ${BRIDGE_LENGTH_MAX}이하 이다.`, () => {
    const bridge = Array.from({ length: 20 }, () => {
      'U';
    });
    expect(() => {
      BridgeValidator.checkBridge(bridge, BRIDGE_LENGTH_MIN, BRIDGE_LENGTH_MAX);
    }).toThrow();
  });

  test('다음 다리로 건너는 값은 U, D이다.', () => {
    expect(() => {
      BridgeValidator.checkInputNext('T');
    }).toThrow();
  });
  test('다음 다리로 건너는 값은 U, D이다.', () => {
    expect(() => {
      BridgeValidator.checkInputNext('U');
    }).not.toThrow();
  });
  test('다음 다리로 건너는 값은 U, D이다.', () => {
    expect(() => {
      BridgeValidator.checkInputNext('D');
    }).not.toThrow();
  });

  test('게임을 재시작 하거나 종료하는 값은 R, Q이다.', () => {
    expect(() => {
      BridgeValidator.checkInputNext('T');
    }).toThrow();
  });
  test('게임을 재시작 하거나 종료하는 값은 R, Q이다.', () => {
    expect(() => {
      BridgeValidator.checkInputNext('R');
    }).not.toThrow();
  });
  test('게임을 재시작 하거나 종료하는 값은 R, Q이다.', () => {
    expect(() => {
      BridgeValidator.checkInputNext('Q');
    }).not.toThrow();
  });

  test('만약 현재 다리 건너는 길이와, 마지막 다리가 같다면 게임이 끝난다.', () => {
    expect(() => {
      BridgeValidator.checkFinish(11, 10);
    }).toThrow();
  });
  test('만약 현재 다리 건너는 길이와, 마지막 다리가 같다면 게임이 끝난다.', () => {
    const isFinish = BridgeValidator.checkFinish(10, 10);
    expect(isFinish).toEqual(true);
  });
  test('만약 현재 다리 건너는 길이와, 마지막 다리가 같다면 게임이 끝난다.', () => {
    const isFinish = BridgeValidator.checkFinish(9, 10);
    expect(isFinish).toEqual(false);
  });

  test('현재 위치가 끝 위치보다 적다.', () => {
    expect(() => {
      BridgeValidator.checkPosition(11, 10);
    }).toThrow();
  });
  test('현재 위치가 끝 위치보다 적다.', () => {
    expect(() => {
      BridgeValidator.checkPosition(9, 10);
    }).not.toThrow();
  });
});
