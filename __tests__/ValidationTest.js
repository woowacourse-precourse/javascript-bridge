const BridgeGameError = require('../src/BridgeGameError');
const ErrorMessages = require('../src/constants/ErrorMessages');
const Validation = require('../src/Validation');

describe('다리 길이 입력 테스트', () => {
  test('다리 길이가 숫자가 아닌 경우 예외처리한다.', () => {
    const input = 'abc';
    const notANumberError = new BridgeGameError(ErrorMessages.DATA_TYPE);

    expect(() => Validation.Bridge(input)).toThrowError(notANumberError);
  });

  test('다리 길이는 3이상 20이하가 아닌 경우 예외처리한다.', () => {
    const inputs = ['0', '30'];
    const inputLengthError = new BridgeGameError(ErrorMessages.BRIDGE_LENGTH);

    inputs.forEach((input) => {
      expect(() => Validation.Bridge(input)).toThrowError(inputLengthError);
    });
  });
});

describe('인 게임 입력 테스트', () => {
  test('입력이 한 글자가 아닌 경우 예외처리한다.', () => {
    const input = 'UUU';
    const lengthError = new BridgeGameError(ErrorMessages.GAME_LENGTH);

    expect(() => Validation.Game(input, 'DIRECTION')).toThrowError(lengthError);
    expect(() => Validation.Game(input, 'GAMESTATUS')).toThrowError(lengthError);
  });

  test('위 또는 아래 이동 시 U 또는 D를 입력하지 않으면 예외처리한다.', () => {
    const inputs = ['A', 'u', '3'];
    const updownError = new BridgeGameError(ErrorMessages.UPDOWN);

    inputs.forEach((input) => {
      expect(() => Validation.Game(input, 'DIRECTION')).toThrowError(updownError);
    });
  });

  test('재시도 또는 종료 시 R 또는 Q를 입력하지 않으면 예외처리한다.', () => {
    const inputs = ['A', 'r', '3'];
    const retryExitError = new BridgeGameError(ErrorMessages.RETRYEXIT);

    inputs.forEach((input) => {
      expect(() => Validation.Game(input, 'GAMESTATUS')).toThrowError(retryExitError);
    });
  });
});
