const Validator = require('../src/Validator');

test('문자에 공백이 포함되어 있다면 예외가 발생한다.', () => {
  const inputValues = [' ', ' 3', '12 ', '3 4'];
  inputValues.forEach((inputValue) => {
    expect(() => Validator.throwErrorIfHasBlank(inputValue)).toThrow('[ERROR]');
  });
});
