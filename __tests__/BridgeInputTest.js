const InputView = require('../src/InputView');

const BridgeLengthException = require('../src/controller/validate/BridgeLengthException');
const BridgeUpDownException = require('../src/controller/validate/BridgeUpDownException');
const BridgeRestartExitException = require('../src/controller/validate/BridgeRestartExitException');

describe('입력한 다리 길이 테스트 - BridgeLengthException', () => {
  test.each([['a'], ['1'], ['21'], ['1 ']])('다리 길이가 3 ~ 20 이외의 숫자에 대한 예외처리', (input) => {
    expect(InputView.isValidate(new BridgeLengthException(input))).toBeFalsy();
  })

  test('(다리 길이(정상) - 숫자(3 ~ 20))', () => {
    const input = '3';

    expect(InputView.isValidate(new BridgeLengthException(input))).toBeTruthy();
  });
});

describe('입력한 UpDownKey 테스트 - BridgeUpDownException', () => {

  test.each([['a'], ['1'], ['u'], ['U ']])('방향키(U, D)에 대한 예외처리', (input) => {
    expect(InputView.isValidate(new BridgeUpDownException(input))).toBeFalsy();
  })

  test('(U or D 문자 입력(정상) - "U") 입력 테스트', () => {
    const input = 'U';

    expect(InputView.isValidate(new BridgeUpDownException(input))).toBeTruthy();
  });
});

describe('입력한 RestartExitKey 테스트 - BridgeRestartExitException', () => {


  test.each([['a'], ['1'], ['q'], ['Q ']])('재시작/종료(Q, R)에 대한 예외처리', (input) => {
    expect(InputView.isValidate(new BridgeRestartExitException(input))).toBeFalsy();
  })

  test('(Q or R 문자 입력(정상) - "U") 입력 테스트', () => {
    const input = 'Q';

    expect(InputView.isValidate(new BridgeRestartExitException(input))).toBeTruthy();
  });
});
