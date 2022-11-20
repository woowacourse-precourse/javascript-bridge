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
});
