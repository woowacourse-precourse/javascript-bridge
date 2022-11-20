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
        console.log(input);
      });
    }).toThrow('invalidRange');
  });
});
