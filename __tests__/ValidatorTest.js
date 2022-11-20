const Validator = require('../src/view/Validator');
const { ERROR_MESSAGES } = require('../src/constants/messages');

describe('🌈 Validator 클래스 테스트 ', () => {
  test('⚡ 사용자가 공백을 입력하면 emptyInput 예외 처리됩니다.', () => {
    const validator = new Validator();
    const userInput = '';
    expect(() => {
      validator.emptyInput(userInput);
    }).toThrow('emptyInput');
  });

  test('⚡ 사용자가 입력한 다리 길이가 3 ~ 20사이 숫자가 아닌 경우 예외 처리됩니다.', () => {
    const validator = new Validator();
    const userInput = ['0', '123', '-1', '99999'];
    expect(() => {
      userInput.forEach((input) => {
        validator.outOfRange(input);
      });
    }).toThrow('invalidRange');
  });

  test('⚡ 사용자가 입력한 다리 길이에 문자가 포함되어 있으면 예외 처리됩니다.', () => {
    const validator = new Validator();
    const userInput = ['우테코 조아용', '1.', '1e1', '1e2', '3.3', '✨'];
    expect(() => {
      userInput.forEach((input) => {
        validator.invalidNumber(input);
      });
    }).toThrow('invalidNumber');
  });

  test('⚡ 사용자가 다리 이동 커맨드로 대문자 U 또는 대문자 D가 아닌 값을 입력하면 예외 처리됩니다.', () => {
    const validator = new Validator();
    const userInput = ['A', 'Uuu', 'u', 'd', 'UD', '1234'];
    expect(() => {
      userInput.forEach((input) => {
        validator.invalidMoveCommand(input);
      });
    }).toThrow('invalidMoveInput');
  });
});
