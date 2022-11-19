const Input = require('../src/controller/validate/Input');

const BridgeLengthException = require('../src/controller/validate/BridgeLengthException');
const BridgeUpDownException = require('../src/controller/validate/BridgeUpDownException');
const BridgeRestartExitException = require('../src/controller/validate/BridgeRestartExitException');

describe('입력한 다리 길이 테스트 - BridgeLengthException', () => {
  test('(다리 길이(오류) - 문자)', () => {
    const input = 'a';

    expect(() => Input.getValidate(new BridgeLengthException(input))).toThrow(
      '[ERROR]'
    );
  });

  test('(다리 길이(오류) - 3미만의 숫자)', () => {
    const input = '1';

    expect(() => Input.getValidate(new BridgeLengthException(input))).toThrow(
      '[ERROR]'
    );
  });

  test('(다리 길이(오류) - 20초과의 숫자)', () => {
    const input = '21';

    expect(() => Input.getValidate(new BridgeLengthException(input))).toThrow(
      '[ERROR]'
    );
  });

  test('(다리 길이(오류) - 문자 + 숫자(3 ~ 20))', () => {
    const input = '1 ';

    expect(() => Input.getValidate(new BridgeLengthException(input))).toThrow(
      '[ERROR]'
    );
  });

  test('(다리 길이(정상) - 숫자(3 ~ 20))', () => {
    const input = '3';

    expect(Input.getValidate(new BridgeLengthException(input))).toEqual('3');
  });
});

describe('입력한 UpDownKey 테스트 - BridgeUpDownException', () => {
  test('(Q or R 제외 문자 입력(오류) - "a") 입력 테스트', () => {
    const input = 'a';

    expect(() => Input.getValidate(new BridgeUpDownException(input))).toThrow(
      '[ERROR]'
    );
  });

  test('(U or D 제외 문자 입력(오류) - "1") 입력 테스트', () => {
    const input = '1';

    expect(() => Input.getValidate(new BridgeUpDownException(input))).toThrow(
      '[ERROR]'
    );
  });

  test('(U or D 제외 문자 입력(오류) - "u") 입력 테스트', () => {
    const input = 'u';

    expect(() => Input.getValidate(new BridgeUpDownException(input))).toThrow(
      '[ERROR]'
    );
  });

  test('(U or D 제외 문자 입력(오류) - "U ") 입력 테스트', () => {
    const input = 'U ';

    expect(() => Input.getValidate(new BridgeUpDownException(input))).toThrow(
      '[ERROR]'
    );
  });

  test('(U or D 문자 입력(정상) - "U") 입력 테스트', () => {
    const input = 'U';

    expect(Input.getValidate(new BridgeUpDownException(input))).toEqual('U');
  });
});

describe('입력한 RestartExitKey 테스트 - BridgeRestartExitException', () => {
  test('(Q or R 제외 문자 입력(오류) - "a") 입력 테스트', () => {
    const input = 'a';

    expect(() =>
      Input.getValidate(new BridgeRestartExitException(input))
    ).toThrow('[ERROR]');
  });

  test('(Q or R 제외 문자 입력(오류) - "1") 입력 테스트', () => {
    const input = '1';

    expect(() =>
      Input.getValidate(new BridgeRestartExitException(input))
    ).toThrow('[ERROR]');
  });

  test('(Q or R 제외 문자 입력(오류) - "u") 입력 테스트', () => {
    const input = 'u';

    expect(() =>
      Input.getValidate(new BridgeRestartExitException(input))
    ).toThrow('[ERROR]');
  });

  test('(Q or R 제외 문자 입력(오류) - "U ") 입력 테스트', () => {
    const input = 'U ';

    expect(() =>
      Input.getValidate(new BridgeRestartExitException(input))
    ).toThrow('[ERROR]');
  });

  test('(Q or R 문자 입력(정상) - "U") 입력 테스트', () => {
    const input = 'Q';

    expect(Input.getValidate(new BridgeRestartExitException(input))).toEqual(
      'Q'
    );
  });
});
