const InputView = require('../src/view/InputView');

const BridgeLengthException = require('../src/view/validate/BridgeLengthException');
const BridgeUpDownException = require('../src/view/validate/BridgeUpDownException');
const BridgeRestartExitException = require('../src/view/validate/BridgeRestartExitException');

describe('입력한 다리 길이 테스트 - BridgeLengthException', () => {
  test.each([['a'], ['1'], ['21'], ['1 ']])(
    '다리 길이가 3 ~ 20 이외의 숫자에 대한 예외처리',
    (input) => {
      const bridgeLengthException = new BridgeLengthException(input);
      expect(() => bridgeLengthException.isValidate()).toThrow('[ERROR]');
    }
  );

  test('(다리 길이(정상) - 숫자(3 ~ 20))', () => {
    const input = '3';
    const bridgeLengthException = new BridgeLengthException(input);

    expect(() => bridgeLengthException.isValidate()).not.toThrow();
  });
});

describe('입력한 UpDownKey 테스트 - BridgeUpDownException', () => {
  test.each([['a'], ['1'], ['u'], ['U ']])(
    '방향키(U, D)에 대한 예외처리',
    (input) => {
      const bridgeUpDownException = new BridgeUpDownException(input);
      expect(() => bridgeUpDownException.isValidate()).toThrow('[ERROR]');
    }
  );

  test('(U or D 문자 입력(정상) - "U") 입력 테스트', () => {
    const input = 'U';
    const bridgeUpDownException = new BridgeUpDownException(input);

    expect(() => bridgeUpDownException.isValidate()).not.toThrow();
  });
});

describe('입력한 RestartExitKey 테스트 - BridgeRestartExitException', () => {
  test.each([['a'], ['1'], ['q'], ['Q ']])(
    '재시작/종료(Q, R)에 대한 예외처리',
    (input) => {
      const bridgeRestartExitException = new BridgeRestartExitException(input);
      expect(() => bridgeRestartExitException.isValidate()).toThrow('[ERROR]');
    }
  );

  test('(Q or R 문자 입력(정상) - "U") 입력 테스트', () => {
    const input = 'Q';
    const bridgeRestartExitException = new BridgeRestartExitException(input);

    expect(() => bridgeRestartExitException.isValidate()).not.toThrow();
  });
});
