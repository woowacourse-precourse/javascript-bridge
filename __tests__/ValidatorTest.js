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
});
