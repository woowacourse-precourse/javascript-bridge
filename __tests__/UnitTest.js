const BridgeGame = require('../src/BridgeGame');
const { STATUS_SUCCESS } = require('../src/constant/constants');
const InputValidation = require('../src/ui/InputValidation');

describe('BridgeGame 관련 테스트', () => {
  test('다리 생성 테스트 : D/U로만 구성된다', () => {
    const bg = new BridgeGame();
    bg.bridgeSetting(5);
    expect(bg.bridgeString).toMatch(/[DU]{5}/);
  });

  test('해당 칸 상태 테스트', () => {
    const bg = new BridgeGame();
    bg.bridgeSetting(5);
    expect(bg.checkStatus('D', 'D')).toEqual(STATUS_SUCCESS);
  });
  
  test('move 테스트', () => {
    const bg = new BridgeGame();
    bg.bridgeString = 'DUDD';
    bg.move('D', 'U');
    expect(bg.isAnswerList).toEqual([false]);
  });
});

describe('UI 관련 테스트', () => {
  test('다리 길이는 3~20 사이의 숫자만 가능하다', () => {
    expect(() => {
      InputValidation.validateBridgeSize('2');
    }).toThrow('[ERROR]');
  });

  test('이동 시에는 U/D만 가능하다', () => {
    expect(() => {
      InputValidation.validateMoving('위');
    }).toThrow('[ERROR]');
  });

  test('한 라운드가 끝나고는 R/Q만 가능하다', () => {
    expect(() => {
      InputValidation.validateReplay('재시도');
    }).toThrow('[ERROR]');
  });
});
