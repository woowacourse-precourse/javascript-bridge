const BridgeMap = require('../src/BridgeMap');
const { SUCCESS, FAIL, CONTINUE, ANSWER, WRONG, EMPTY } =
  require('../src/Utils/Constant').BRIDGE;

describe('Bridge 클래스 테스트', () => {
  test('Bridge가 Array의 값을 받고 객체로 변환하는지 테스트', () => {
    const bridge = new BridgeMap(3);
    bridge.convertObj(['U', 'D', 'D']);
    expect(bridge.bridgeObject).toEqual({
      U: ['O', ' ', ' '],
      D: [' ', 'O', 'O'],
    });
  });

  test('move 함수 올바른 값을 넣었을때 리턴값 체크', () => {
    const bridge = new BridgeMap(3);
    bridge.convertObj(['U', 'D', 'D']);
    expect(bridge.move('U', [0])).toBe(CONTINUE);
  });

  test('move 함수 잘못된 값을 넣었을때 리턴값 체크', () => {
    const bridge = new BridgeMap(3);
    bridge.convertObj(['U', 'D', 'D']);
    expect(bridge.move('D', [0])).toBe(FAIL);
  });

  test('isMove 함수 체크', () => {
    const bridge = new BridgeMap(3);
    bridge.convertObj(['U', 'D', 'D']);
    expect(bridge.isMove('U', [0])).toBe(true);
  });

  test('correctMove 함수 체크', () => {
    const bridge = new BridgeMap(3);
    bridge.convertObj(['U', 'D', 'D']);
    expect(bridge.correctMove([0])).toBe(CONTINUE);
  });

  test('correctMove 함수 체크', () => {
    const bridge = new BridgeMap(3);
    bridge.convertObj(['U', 'D', 'D']);
    expect(bridge.correctMove(2)).toBe(SUCCESS);
  });
});
